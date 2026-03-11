"use client";

import { Canvas, useFrame, useThree } from "@react-three/fiber";
import React, { useMemo, useRef, useState, useEffect } from "react";
import * as THREE from "three";
import { cn } from "@/lib/utils";

const getPreparedUniforms = (
  colors: number[][],
  opacities: number[],
  totalSize: number,
  dotSize: number,
  width: number,
  height: number
) => {
  let colorsArray =
    colors.length === 2
      ? [colors[0], colors[0], colors[0], colors[1], colors[1], colors[1]]
      : colors.length === 3
      ? [colors[0], colors[0], colors[1], colors[1], colors[2], colors[2]]
      : [colors[0], colors[0], colors[0], colors[0], colors[0], colors[0]];

  return {
    u_time: { value: 0 },
    u_resolution: { value: new THREE.Vector2(width * 2, height * 2) },
    u_colors: {
      value: colorsArray.map(
        ([r, g, b]) => new THREE.Vector3(r / 255, g / 255, b / 255)
      ),
    },
    u_opacities: { value: opacities },
    u_total_size: { value: totalSize },
    u_dot_size: { value: dotSize },
    u_mouse: { value: new THREE.Vector2(0.5, 0.5) },
  };
};

const CustomShaderMaterial = ({
  source,
  uniforms,
  maxFps = 60,
}: {
  source: string;
  uniforms: any;
  maxFps?: number;
}) => {
  const { size } = useThree();
  const ref = useRef<THREE.Mesh>(null!);
  let lastFrameTime = 0;

  useEffect(() => {
    if (ref.current && (ref.current.material as any)?.uniforms) {
      (ref.current.material as any).uniforms.u_resolution.value.set(
        size.width * 2,
        size.height * 2
      );
    }
  }, [size]);

  useFrame(({ clock }) => {
    const timestamp = clock.getElapsedTime();
    if (timestamp - lastFrameTime < 1 / maxFps) return;
    lastFrameTime = timestamp;
    const mat = ref.current.material as any;
    if (mat.uniforms?.u_time) {
      mat.uniforms.u_time.value = timestamp;
    }
  });

  const material = useMemo(() => {
    return new THREE.ShaderMaterial({
      vertexShader: `
        precision mediump float;
        in vec2 coordinates;
        uniform vec2 u_resolution;
        out vec2 fragCoord;
        void main(){
          gl_Position = vec4(position.x, position.y, 0.0, 1.0);
          fragCoord = (position.xy + vec2(1.0)) * 0.5 * u_resolution;
          fragCoord.y = u_resolution.y - fragCoord.y;
        }
      `,
      fragmentShader: source,
      uniforms,
      glslVersion: THREE.GLSL3,
      blending: THREE.AdditiveBlending,
      transparent: true,
      depthWrite: false,
    });
  }, [source, uniforms]);

  return (
    <mesh ref={ref}>
      <planeGeometry args={[2, 2]} />
      <primitive object={material} attach="material" />
    </mesh>
  );
};

const CanvasRevealEffect = ({
  animationSpeed = 0.4,
  opacities = [0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0, 1.0],
  colors = [[0, 255, 255]],
  containerClassName,
  dotSize = 2,
  showGradient = true,
  className,
}: {
  animationSpeed?: number;
  opacities?: number[];
  colors?: number[][];
  containerClassName?: string;
  dotSize?: number;
  showGradient?: boolean;
  className?: string;
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const update = () => {
      if (containerRef.current) {
        setDimensions({
          width: containerRef.current.clientWidth,
          height: containerRef.current.clientHeight,
        });
      }
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const uniforms = useMemo(() => {
    return getPreparedUniforms(
      colors,
      opacities,
      6,
      dotSize,
      dimensions.width,
      dimensions.height
    );
  }, [colors, opacities, dotSize, dimensions]);

  const shaderSource = `
    float animation_speed_factor = ${animationSpeed.toFixed(1)};
    
    // Enhanced wave effect
    float wave = sin(u_time * 2.0 + st2.x * 0.5 + st2.y * 0.3) * 0.5 + 0.5;
    float wave2 = cos(u_time * 1.5 + st2.x * 0.3 + st2.y * 0.7) * 0.5 + 0.5;
    
    // Pulsing effect
    float pulse = sin(u_time * 3.0) * 0.3 + 0.7;
    
    // Distance-based fade
    float dist_from_center = distance(st, vec2(0.5));
    float center_fade = 1.0 - smoothstep(0.0, 0.5, dist_from_center);
    
    // Enhanced intro animation
    float intro_offset = distance(u_resolution / 2.0 / u_total_size, st2) * 0.02 + (random(st2) * 0.2);
    float intro_progress = smoothstep(0.0, 1.0, (u_time * animation_speed_factor - intro_offset) * 2.0);
    
    // Combine effects
    opacity *= intro_progress;
    opacity *= wave * 0.3 + 0.7;
    opacity *= pulse;
    opacity *= center_fade * 0.5 + 0.5;
    
    // Add sparkle effect
    float sparkle = step(0.95, random(st2 + u_time * 0.1));
    opacity += sparkle * 0.3;
  `;

  const baseShader = `
    precision mediump float;
    in vec2 fragCoord;

    uniform float u_time;
    uniform float u_opacities[10];
    uniform vec3 u_colors[6];
    uniform float u_total_size;
    uniform float u_dot_size;
    uniform vec2 u_resolution;
    uniform vec2 u_mouse;
    out vec4 fragColor;
    
    float PHI = 1.61803398874989484820459;
    
    float random(vec2 xy) {
        return fract(tan(distance(xy * PHI, xy) * 0.5) * xy.x);
    }
    
    float noise(vec2 p) {
        return fract(sin(dot(p, vec2(12.9898, 78.233))) * 43758.5453);
    }
    
    float smoothNoise(vec2 p) {
        vec2 i = floor(p);
        vec2 f = fract(p);
        f = f * f * (3.0 - 2.0 * f);
        
        float a = noise(i);
        float b = noise(i + vec2(1.0, 0.0));
        float c = noise(i + vec2(0.0, 1.0));
        float d = noise(i + vec2(1.0, 1.0));
        
        return mix(mix(a, b, f.x), mix(c, d, f.x), f.y);
    }
    
    void main() {
        vec2 st = fragCoord.xy / u_resolution.xy;
        st.x -= abs(floor((mod(u_resolution.x, u_total_size) - u_dot_size) * 0.5));
        st.y -= abs(floor((mod(u_resolution.y, u_total_size) - u_dot_size) * 0.5));
        
        float opacity = step(0.0, st.x) * step(0.0, st.y);
        vec2 st2 = vec2(int(st.x / u_total_size), int(st.y / u_total_size));
        
        float show_offset = random(st2);
        float rand = random(st2 * floor((u_time / 3.0) + show_offset + 5.0) + 1.0);
        
        opacity *= u_opacities[int(rand * 10.0)];
        opacity *= 1.0 - step(u_dot_size / u_total_size, fract(st.x / u_total_size));
        opacity *= 1.0 - step(u_dot_size / u_total_size, fract(st.y / u_total_size));
        
        // Enhanced color selection with smooth transitions
        float color_index = show_offset * 6.0;
        int color_idx = int(color_index);
        float color_lerp = fract(color_index);
        
        vec3 color1 = u_colors[color_idx];
        vec3 color2 = u_colors[min(color_idx + 1, 5)];
        vec3 color = mix(color1, color2, color_lerp);
        
        // Add subtle color variation based on position and time
        float color_variation = sin(u_time + st2.x * 0.1 + st2.y * 0.1) * 0.1 + 0.9;
        color *= color_variation;
        
        ${shaderSource}
        
        // Add glow effect
        float glow = smoothstep(0.0, 0.1, opacity) * 0.5;
        color += glow * color * 2.0;
        
        fragColor = vec4(color, opacity);
        fragColor.rgb *= fragColor.a;
    }
  `;

  return (
    <div
      ref={containerRef}
      className={cn(
        "h-full relative w-full overflow-hidden",
        containerClassName
      )}
    >
      {dimensions.width > 0 && dimensions.height > 0 && (
        <Canvas
          style={{ width: dimensions.width, height: dimensions.height }}
          gl={{
            antialias: true,
            alpha: true,
            premultipliedAlpha: false,
          }}
          camera={{ position: [0, 0, 1] }}
        >
          <CustomShaderMaterial source={baseShader} uniforms={uniforms} />
        </Canvas>
      )}
      {showGradient && (
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
      )}
    </div>
  );
};

export default CanvasRevealEffect;
