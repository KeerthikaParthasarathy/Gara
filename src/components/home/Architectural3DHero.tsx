"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { useApp } from "@/context/AppContext";
import {
  ChevronDown,
  Sun,
  Moon,
  Compass,
  ArrowRight,
  ShieldCheck,
  Eye,
} from "lucide-react";
import * as THREE from "three";

export function Architectural3DHero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { openEnquiryModal } = useApp();

  const [sceneMode, setSceneMode] = useState<"twilight" | "golden">("twilight");
  const [webglSupported, setWebglSupported] = useState(true);
  const [isHovering3D, setIsHovering3D] = useState(false);

  useEffect(() => {
    // Check reduced motion preference
    if (typeof window !== "undefined") {
      const prefersReducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;
      if (prefersReducedMotion) {
        setWebglSupported(false);
        return;
      }
    }

    if (!canvasRef.current || !containerRef.current) return;

    let animationFrameId: number;
    let renderer: THREE.WebGLRenderer;
    let scene: THREE.Scene;
    let camera: THREE.PerspectiveCamera;

    try {
      scene = new THREE.Scene();
      scene.background = new THREE.Color(sceneMode === "twilight" ? 0x090909 : 0x120d08);
      scene.fog = new THREE.FogExp2(
        sceneMode === "twilight" ? 0x090909 : 0x140e0a,
        0.028
      );

      const width = containerRef.current.clientWidth;
      const height = containerRef.current.clientHeight;

      camera = new THREE.PerspectiveCamera(40, width / height, 0.1, 100);
      camera.position.set(0, 3.2, 14);

      renderer = new THREE.WebGLRenderer({
        canvas: canvasRef.current,
        alpha: true,
        antialias: true,
        powerPreference: "high-performance",
      });
      renderer.setSize(width, height);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.75));
      renderer.toneMapping = THREE.ACESFilmicToneMapping;
      renderer.toneMappingExposure = 1.15;

      // Lights
      const ambientLight = new THREE.AmbientLight(
        sceneMode === "twilight" ? 0x1a2230 : 0x3d2b1f,
        sceneMode === "twilight" ? 0.8 : 1.2
      );
      scene.add(ambientLight);

      // Warm directional light mimicking dusk sun
      const sunLight = new THREE.DirectionalLight(
        sceneMode === "twilight" ? 0xe1cc9b : 0xffa550,
        sceneMode === "twilight" ? 1.4 : 2.6
      );
      sunLight.position.set(12, 10, 8);
      scene.add(sunLight);

      // Interior warm glowing lights inside the architectural volumes
      const interiorLight = new THREE.PointLight(0xc6a76a, 4.5, 18);
      interiorLight.position.set(0, 2.5, 1);
      scene.add(interiorLight);

      const poolLight = new THREE.PointLight(0x447799, 1.8, 12);
      poolLight.position.set(0, 0.2, 4);
      scene.add(poolLight);

      // ARCHITECTURAL GEOMETRY (Modernist Cantilevered Villa)
      const villaGroup = new THREE.Group();

      // Materials
      const concreteMaterial = new THREE.MeshStandardMaterial({
        color: 0x222222,
        roughness: 0.7,
        metalness: 0.1,
      });

      const travertineMaterial = new THREE.MeshStandardMaterial({
        color: sceneMode === "twilight" ? 0x33302b : 0x484238,
        roughness: 0.85,
        metalness: 0.05,
      });

      const bronzeMaterial = new THREE.MeshStandardMaterial({
        color: 0xc6a76a,
        roughness: 0.35,
        metalness: 0.75,
      });

      const glassMaterial = new THREE.MeshPhysicalMaterial({
        color: 0x99bbcc,
        roughness: 0.1,
        transmission: 0.9,
        transparent: true,
        opacity: 0.65,
        reflectivity: 0.9,
      });

      const waterMaterial = new THREE.MeshStandardMaterial({
        color: 0x05131a,
        roughness: 0.15,
        metalness: 0.85,
      });

      // Ground Plinth
      const plinthGeo = new THREE.BoxGeometry(22, 0.4, 18);
      const plinth = new THREE.Mesh(plinthGeo, concreteMaterial);
      plinth.position.y = -0.2;
      villaGroup.add(plinth);

      // Reflecting Pool
      const poolGeo = new THREE.BoxGeometry(10, 0.08, 6);
      const pool = new THREE.Mesh(poolGeo, waterMaterial);
      pool.position.set(0, 0.05, 4.2);
      villaGroup.add(pool);

      // Pool Bronze Rim
      const rimGeo = new THREE.BoxGeometry(10.4, 0.12, 6.4);
      const rim = new THREE.Mesh(rimGeo, bronzeMaterial);
      rim.position.set(0, 0.02, 4.2);
      villaGroup.add(rim);

      // Ground Floor Living Pavilion (Glass & Columns)
      const livingGeo = new THREE.BoxGeometry(12, 2.4, 7);
      const livingGlass = new THREE.Mesh(livingGeo, glassMaterial);
      livingGlass.position.set(0, 1.2, 0);
      villaGroup.add(livingGlass);

      // Internal illuminated core
      const coreGeo = new THREE.BoxGeometry(4, 2.3, 3);
      const interiorCore = new THREE.Mesh(coreGeo, travertineMaterial);
      interiorCore.position.set(-2, 1.15, 0);
      villaGroup.add(interiorCore);

      // Colonnade (Slim Bronze Architectural Mullions)
      for (let x = -5.8; x <= 5.8; x += 1.45) {
        const columnGeo = new THREE.CylinderGeometry(0.04, 0.04, 2.4, 12);
        const col = new THREE.Mesh(columnGeo, bronzeMaterial);
        col.position.set(x, 1.2, 3.4);
        villaGroup.add(col);
      }

      // First Floor Cantilevered Master Suite (Dramatic Asymmetry)
      const upperGeo = new THREE.BoxGeometry(9.5, 2.1, 7.8);
      const upperSuite = new THREE.Mesh(upperGeo, travertineMaterial);
      upperSuite.position.set(2.8, 3.4, 0.4);
      villaGroup.add(upperSuite);

      // Cantilevered Glass Viewing Terrace
      const terraceGlassGeo = new THREE.BoxGeometry(4.2, 1.8, 0.1);
      const terraceGlass = new THREE.Mesh(terraceGlassGeo, glassMaterial);
      terraceGlass.position.set(4.5, 3.4, 4.3);
      villaGroup.add(terraceGlass);

      // Roof Slab / Overhang
      const roofGeo = new THREE.BoxGeometry(15, 0.35, 10);
      const roof = new THREE.Mesh(roofGeo, concreteMaterial);
      roof.position.set(1.5, 4.6, 0.4);
      villaGroup.add(roof);

      // Architectural Stepping Stones in pool
      for (let i = -3; i <= 3; i += 2) {
        const stepGeo = new THREE.BoxGeometry(1.2, 0.15, 0.8);
        const step = new THREE.Mesh(stepGeo, travertineMaterial);
        step.position.set(i * 0.9, 0.1, 4.2);
        villaGroup.add(step);
      }

      villaGroup.position.set(1.8, -0.6, -1);
      villaGroup.rotation.y = -0.22;
      scene.add(villaGroup);

      // Subtle atmospheric floating dust / light motes
      const particlesGeo = new THREE.BufferGeometry();
      const count = 140;
      const positions = new Float32Array(count * 3);
      for (let i = 0; i < count * 3; i += 3) {
        positions[i] = (Math.random() - 0.5) * 20;
        positions[i + 1] = Math.random() * 8;
        positions[i + 2] = (Math.random() - 0.5) * 16;
      }
      particlesGeo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
      const particlesMat = new THREE.PointsMaterial({
        color: 0xc6a76a,
        size: 0.05,
        transparent: true,
        opacity: 0.5,
      });
      const particles = new THREE.Points(particlesGeo, particlesMat);
      scene.add(particles);

      // Pointer Parallax
      let mouseX = 0;
      let mouseY = 0;
      let targetX = 0;
      let targetY = 0;

      const handleMouseMove = (event: MouseEvent) => {
        const rect = containerRef.current?.getBoundingClientRect();
        if (!rect) return;
        mouseX = ((event.clientX - rect.left) / rect.width) * 2 - 1;
        mouseY = -(((event.clientY - rect.top) / rect.height) * 2 - 1);
      };

      window.addEventListener("mousemove", handleMouseMove, { passive: true });

      // Resize observer
      const handleResize = () => {
        if (!containerRef.current || !renderer || !camera) return;
        const w = containerRef.current.clientWidth;
        const h = containerRef.current.clientHeight;
        camera.aspect = w / h;
        camera.updateProjectionMatrix();
        renderer.setSize(w, h);
      };

      window.addEventListener("resize", handleResize);

      // Render Loop with dampening
      let clock = new THREE.Clock();

      const animate = () => {
        animationFrameId = requestAnimationFrame(animate);
        const delta = clock.getDelta();

        // Parallax easing
        targetX += (mouseX * 0.8 - targetX) * 0.04;
        targetY += (mouseY * 0.4 - targetY) * 0.04;

        camera.position.x = targetX;
        camera.position.y = 3.2 + targetY;
        camera.lookAt(1.2, 1.8, 0);

        // Subtle gentle breathing of light
        interiorLight.intensity = 4.2 + Math.sin(clock.getElapsedTime() * 1.5) * 0.4;
        particles.rotation.y += delta * 0.015;

        renderer.render(scene, camera);
      };

      animate();

      return () => {
        window.removeEventListener("mousemove", handleMouseMove);
        window.removeEventListener("resize", handleResize);
        cancelAnimationFrame(animationFrameId);
        renderer.dispose();
      };
    } catch {
      setWebglSupported(false);
    }
  }, [sceneMode]);

  return (
    <section
      ref={containerRef}
      className="relative w-full min-h-[92vh] md:min-h-screen flex items-center justify-between overflow-hidden bg-obsidian pt-24 md:pt-16"
      onMouseEnter={() => setIsHovering3D(true)}
      onMouseLeave={() => setIsHovering3D(false)}
    >
      {/* 3D Canvas or Fallback Background */}
      {webglSupported ? (
        <canvas
          ref={canvasRef}
          className="absolute inset-0 w-full h-full pointer-events-none z-0 opacity-80 md:opacity-90 transition-opacity duration-1000"
        />
      ) : (
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2000&auto=format&fit=crop"
            alt="GARA Architectural Sanctuary - Villa elevation at twilight"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center opacity-40 brightness-75 scale-105"
          />
        </div>
      )}

      {/* Cinematic Vignette Overlays for Maximum Contrast & Editorial Depth */}
      <div className="absolute inset-0 bg-gradient-to-r from-obsidian via-obsidian/75 to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-transparent to-obsidian/40 z-10 pointer-events-none" />

      {/* Foreground Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-6 md:px-12 w-full py-12 md:py-20 flex flex-col justify-between min-h-[75vh]">
        <div className="max-w-3xl">
          {/* Eyebrow */}
          <div className="flex items-center gap-3 mb-6 animate-fade-in">
            <span className="w-8 h-[1px] bg-gold" />
            <span className="text-[11px] md:text-xs font-sans uppercase tracking-[0.28em] text-gold font-medium">
              Exceptional Residences • Distinctive Living
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-serif text-ivory tracking-tight leading-[1.08] mb-6 animate-fade-up">
            A Different <br />
            <span className="italic font-light text-gold-soft">Perspective</span> on Luxury.
          </h1>

          {/* Supporting Copy */}
          <p className="text-base sm:text-lg text-ivory-muted/90 font-sans max-w-xl leading-relaxed mb-10 animate-fade-up font-light">
            Discover exceptional residences selected for their architecture, character and sense of place across India’s most revered coastal, urban, and alpine enclaves.
          </p>

          {/* CTA Row */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 animate-fade-up">
            <Button
              variant="gold"
              size="lg"
              href="/properties"
              className="group shadow-lg"
            >
              <span className="flex items-center gap-2">
                Explore Residences
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </span>
            </Button>

            <Button
              variant="outline"
              size="lg"
              onClick={() => openEnquiryModal()}
              className="hover:bg-charcoal/60"
            >
              Enquire with GARA
            </Button>
          </div>
        </div>

        {/* Bottom Metrics & Interactive Atmosphere Controls */}
        <div className="pt-12 mt-8 border-t border-graphite-border/70 flex flex-col lg:flex-row lg:items-end justify-between gap-6 z-20">
          {/* Curated Metrics */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 sm:gap-10">
            <div>
              <div className="text-xl sm:text-2xl font-serif text-ivory">₹1,850+ Cr</div>
              <div className="text-[10px] sm:text-[11px] uppercase tracking-[0.16em] text-stone-400 mt-1">
                Portfolio Curated
              </div>
            </div>
            <div>
              <div className="text-xl sm:text-2xl font-serif text-ivory">100%</div>
              <div className="text-[10px] sm:text-[11px] uppercase tracking-[0.16em] text-stone-400 mt-1">
                Verified Titles & RERA
              </div>
            </div>
            <div className="col-span-2 sm:col-span-1">
              <div className="text-xl sm:text-2xl font-serif text-gold">Confidential</div>
              <div className="text-[10px] sm:text-[11px] uppercase tracking-[0.16em] text-stone-400 mt-1">
                Private Treaty Protocol
              </div>
            </div>
          </div>

          {/* Interactive 3D Lighting & Mode Switcher */}
          {webglSupported && (
            <div className="flex items-center gap-4 bg-charcoal/80 backdrop-blur-md border border-graphite-border px-4 py-2 text-xs">
              <span className="text-[10px] uppercase tracking-widest text-stone-400 flex items-center gap-1.5">
                <Compass className="w-3.5 h-3.5 text-gold animate-spin-slow" />
                Atmosphere:
              </span>
              <div className="flex items-center gap-1">
                <button
                  onClick={() => setSceneMode("twilight")}
                  className={`px-2.5 py-1 text-[11px] uppercase tracking-wider flex items-center gap-1 transition-colors ${
                    sceneMode === "twilight"
                      ? "bg-graphite text-gold border border-gold/40"
                      : "text-stone-400 hover:text-ivory"
                  }`}
                  title="Switch to Twilight Illumination"
                >
                  <Moon className="w-3 h-3" /> Twilight
                </button>
                <button
                  onClick={() => setSceneMode("golden")}
                  className={`px-2.5 py-1 text-[11px] uppercase tracking-wider flex items-center gap-1 transition-colors ${
                    sceneMode === "golden"
                      ? "bg-graphite text-gold border border-gold/40"
                      : "text-stone-400 hover:text-ivory"
                  }`}
                  title="Switch to Golden Hour Illumination"
                >
                  <Sun className="w-3 h-3" /> Golden Hour
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Subtle Scroll Down Prompt */}
      <a
        href="#collection"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-1.5 text-stone-400 hover:text-gold transition-colors text-[10px] uppercase tracking-[0.2em]"
        aria-label="Scroll to featured residences"
      >
        <span>Discover</span>
        <ChevronDown className="w-3.5 h-3.5 animate-bounce" />
      </a>
    </section>
  );
}
