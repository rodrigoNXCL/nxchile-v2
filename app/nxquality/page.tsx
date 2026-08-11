// app/nxquality/page.tsx
"use client";

import { useEffect, useState } from 'react';

export default function NXQualityPage() {
  return (
    <main className="nxquality-main">
      <PresentationContent />
    </main>
  );
}

function PresentationContent() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 24;

  useEffect(() => {
    const handleScroll = () => {
      const slides = document.querySelectorAll('.slide');
      let activeIndex = 0;
      const windowHeight = window.innerHeight;

      slides.forEach((slide, index) => {
        const rect = slide.getBoundingClientRect();
        if (rect.top <= windowHeight / 2 && rect.bottom >= windowHeight / 4) {
          activeIndex = index;
        }
      });

      setCurrentSlide(activeIndex);
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  const goToSlide = (index: number) => {
    const slides = document.querySelectorAll('.slide');
    if (slides[index]) {
      slides[index].scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const goToPrev = () => {
    if (currentSlide > 0) {
      goToSlide(currentSlide - 1);
    }
  };

  const goToNext = () => {
    if (currentSlide < totalSlides - 1) {
      goToSlide(currentSlide + 1);
    }
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowDown' || e.key === 'ArrowRight') {
        e.preventDefault();
        goToNext();
      } else if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') {
        e.preventDefault();
        goToPrev();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentSlide]);

  return (
    <>
      {/* ============================================================ */}
      {/* PARTE I: EL MERCADO CAMBIÓ */}
      {/* ============================================================ */}

      {/* SLIDE 1: LA CALIDAD YA NO ES SUFICIENTE */}
      <section className="slide" id="slide-0">
        <div className="container slide-content">
          <div className="badge">
            <i className="fas fa-leaf"></i> NX Quality · La nueva generación
          </div>
          <h1>
            La calidad ya no es <span className="gradient">suficiente</span>
          </h1>
          <p style={{ fontSize: '1.3rem', color: '#d0d9e5', maxWidth: '680px', margin: '16px 0 8px' }}>
            El nuevo escenario de la industria
          </p>
          <p style={{ fontSize: '1rem', color: '#8899aa', marginBottom: '32px' }}>
            Versión 2.0 · Presentación Estratégica
          </p>
          <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
            <a href="#slide-1" className="btn-primary" onClick={(e) => { e.preventDefault(); goToSlide(1); }}>
              <i className="fas fa-arrow-right"></i> Explorar la presentación
            </a>
            <span style={{ display: 'inline-flex', alignItems: 'center', color: '#8899aa', gap: '8px', fontSize: '0.9rem' }}>
              <i className="fas fa-chevron-down"></i> 24 diapositivas
            </span>
          </div>
          <div style={{ marginTop: '60px', paddingTop: '24px', borderTop: '1px solid rgba(255,255,255,0.04)', display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '10px', color: '#8899aa', fontSize: '0.8rem' }}>
            <span><i className="fas fa-lock"></i> Confidencial</span>
            <span>NX Quality · Versión 2.0</span>
          </div>
        </div>
      </section>

      {/* SLIDE 2: EL NUEVO DIFERENCIADOR COMPETITIVO */}
      <section className="slide" id="slide-1">
        <div className="container slide-content">
          <span className="badge"><i className="fas fa-trophy"></i> El nuevo diferenciador</span>
          <h2>La información pasó a ser un <span className="text-gradient">activo estratégico</span></h2>
          <div className="grid-2">
            <div>
              <p style={{ color: '#e0e8f0', marginBottom: '16px' }}>
                Dos exportadoras pueden producir fruta de una calidad muy similar.
              </p>
              <p style={{ color: '#d0d9e5', marginBottom: '16px' }}>
                Sin embargo, una de ellas responderá un reclamo en minutos. Podrá reconstruir toda la historia de una partida. Justificar técnicamente una decisión. Encontrar patrones antes de que se transformen en problemas.
              </p>
              <p style={{ color: '#d0d9e5', fontStyle: 'italic', borderLeft: '3px solid #2ecc71', paddingLeft: '16px' }}>
                "La diferencia ya no estará únicamente en la fruta. Estará en la capacidad de transformar información en conocimiento."
              </p>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', background: 'rgba(255,255,255,0.02)', borderRadius: '24px', padding: '28px', border: '1px dashed rgba(46,204,113,0.15)' }}>
              <i className="fas fa-arrow-right" style={{ fontSize: '2rem', color: '#2ecc71', marginBottom: '12px' }}></i>
              <h3 style={{ color: '#fff', fontSize: '1.4rem' }}>Información → Conocimiento</h3>
              <p style={{ color: '#d0d9e5', fontSize: '0.95rem' }}>El nuevo activo estratégico</p>
            </div>
          </div>
        </div>
      </section>

      {/* SLIDE 3: LOS SISTEMAS ACTUALES CUMPLIERON SU PROPÓSITO */}
      <section className="slide" id="slide-2">
        <div className="container slide-content">
          <span className="badge"><i className="fas fa-check-circle"></i> El primer paso</span>
          <h2>Digitalizar fue el <span className="text-gradient">primer paso</span></h2>
          <div className="grid-2">
            <div>
              <p style={{ color: '#e0e8f0', marginBottom: '16px' }}>
                Durante los últimos años la industria incorporó excelentes herramientas para digitalizar procesos.
              </p>
              <ul className="benefit-list">
                <li><i className="fas fa-check-circle"></i> Registrar inspecciones</li>
                <li><i className="fas fa-check-circle"></i> Capturar fotografías</li>
                <li><i className="fas fa-check-circle"></i> Generar informes</li>
                <li><i className="fas fa-check-circle"></i> Administrar formularios</li>
                <li><i className="fas fa-check-circle"></i> Centralizar la operación</li>
              </ul>
            </div>
            <div style={{ background: '#0f151c', borderRadius: '20px', padding: '28px', border: '1px solid rgba(46,204,113,0.1)' }}>
              <i className="fas fa-exclamation-triangle" style={{ fontSize: '2.5rem', color: '#f1c40f' }}></i>
              <h4 style={{ color: '#fff', margin: '12px 0 8px' }}>El desafío actual</h4>
              <p style={{ color: '#d0d9e5' }}>
                Registrar información ya no es suficiente. Ahora es necesario <span className="highlight">comprenderla</span>, <span className="highlight">relacionarla</span>, <span className="highlight">conservarla</span> y utilizarla para decidir mejor.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SLIDE 4: EL VERDADERO PROBLEMA */}
      <section className="slide" id="slide-3">
        <div className="container slide-content">
          <span className="badge"><i className="fas fa-exclamation-triangle"></i> El verdadero problema</span>
          <h2>No falta información.<br />Falta <span className="text-gradient">conocimiento</span></h2>
          <div className="grid-2">
            <div>
              <p style={{ color: '#e0e8f0', marginBottom: '12px' }}>
                Cada temporada genera miles de inspecciones, fotografías, mediciones y decisiones técnicas.
              </p>
              <p style={{ color: '#d0d9e5', marginBottom: '12px' }}>
                Toda esa información existe. Pero permanece distribuida.
              </p>
              <ul className="benefit-list">
                <li><i className="fas fa-times-circle"></i> Planillas</li>
                <li><i className="fas fa-times-circle"></i> Informes PDF</li>
                <li><i className="fas fa-times-circle"></i> Teléfonos</li>
                <li><i className="fas fa-times-circle"></i> Correos</li>
                <li><i className="fas fa-times-circle"></i> Conversaciones</li>
                <li><i className="fas fa-times-circle"></i> Experiencia de las personas</li>
              </ul>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', background: 'rgba(46,204,113,0.03)', borderRadius: '24px', padding: '28px', border: '1px solid rgba(46,204,113,0.1)' }}>
              <p style={{ fontSize: '2rem', color: '#e8edf2', textAlign: 'center', fontWeight: '700' }}>
                La información <span className="highlight">existe</span>.
              </p>
              <p style={{ fontSize: '2rem', color: '#e74c3c', textAlign: 'center', fontWeight: '700' }}>
                El conocimiento se <span style={{ color: '#e74c3c' }}>pierde</span>.
              </p>
              <div style={{ marginTop: '16px', background: 'rgba(231,76,60,0.05)', borderRadius: '12px', padding: '12px 16px', borderLeft: '4px solid #e74c3c' }}>
                <p style={{ color: '#d0d9e5', fontStyle: 'italic', fontSize: '0.95rem' }}>
                  "Cuando aparece un reclamo, una auditoría o una decisión crítica, comienza una búsqueda para reconstruir una historia que la empresa ya vivió."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* PARTE II: EL CAMBIO DE PARADIGMA */}
      {/* ============================================================ */}

      {/* SLIDE 5: NO NECESITAMOS MÁS FORMULARIOS */}
      <section className="slide" id="slide-4">
        <div className="container slide-content">
          <span className="badge"><i className="fas fa-sync-alt"></i> Cambio de paradigma</span>
          <h2>No necesitamos más formularios.<br />Necesitamos <span className="text-gradient">preservar el conocimiento</span></h2>
          <div className="grid-3">
            <div className="card">
              <i className="fas fa-brain"></i>
              <h3>Cada inspección</h3>
              <p>Debe generar conocimiento, no solo datos.</p>
            </div>
            <div className="card">
              <i className="fas fa-gavel"></i>
              <h3>Cada decisión</h3>
              <p>Debe quedar respaldada con evidencia.</p>
            </div>
            <div className="card">
              <i className="fas fa-camera"></i>
              <h3>Cada fotografía</h3>
              <p>Debe aportar contexto, no solo imagen.</p>
            </div>
            <div className="card">
              <i className="fas fa-calendar-alt"></i>
              <h3>Cada temporada</h3>
              <p>Debe hacer más inteligente a la empresa.</p>
            </div>
          </div>
        </div>
      </section>

      {/* SLIDE 6: ¿QUÉ ES NX QUALITY? */}
      <section className="slide" id="slide-5">
        <div className="container slide-content">
          <span className="badge"><i className="fas fa-cube"></i> Una nueva categoría</span>
          <h2>¿Qué es <span className="text-gradient">NX Quality</span>?</h2>
          <div style={{ background: 'rgba(46,204,113,0.03)', borderRadius: '24px', padding: '32px', border: '1px solid rgba(46,204,113,0.1)', marginBottom: '24px' }}>
            <p style={{ fontSize: '1.3rem', color: '#e8edf2', textAlign: 'center' }}>
              <i className="fas fa-quote-left" style={{ color: '#2ecc71', marginRight: '12px' }}></i>
              La primera <span className="highlight">Plataforma de Inteligencia Operacional</span> para la Gestión de Calidad Frutícola
            </p>
          </div>
          <div className="grid-2">
            <div>
              <p style={{ color: '#d0d9e5' }}>
                NX Quality no nace como un sistema de inspecciones. No nace como un software de formularios. No nace como una plataforma para generar reportes.
              </p>
              <p style={{ color: '#d0d9e5', marginTop: '12px' }}>
                Su propósito es <span className="highlight">transformar la información operacional en conocimiento permanente</span> para la empresa.
              </p>
            </div>
            <div style={{ background: '#0f151c', borderRadius: '16px', padding: '20px 24px', border: '1px solid #1f2a33' }}>
              <p style={{ color: '#8899aa', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.5px' }}>No es</p>
              <ul style={{ listStyle: 'none', color: '#d0d9e5' }}>
                <li><i className="fas fa-times" style={{ color: '#e74c3c', marginRight: '8px' }}></i> Un sistema de inspecciones</li>
                <li><i className="fas fa-times" style={{ color: '#e74c3c', marginRight: '8px' }}></i> Un software de formularios</li>
                <li><i className="fas fa-times" style={{ color: '#e74c3c', marginRight: '8px' }}></i> Una plataforma de reportes</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* SLIDE 7: EL PARADIGMA CAMBIA */}
      <section className="slide" id="slide-6">
        <div className="container slide-content">
          <span className="badge"><i className="fas fa-exchange-alt"></i> Antes y después</span>
          <h2>El <span className="text-gradient">paradigma</span> cambia</h2>
          <div className="grid-2">
            <div style={{ background: 'rgba(255,255,255,0.02)', borderRadius: '20px', padding: '24px', border: '1px solid rgba(255,255,255,0.05)' }}>
              <h4 style={{ color: '#8899aa', marginBottom: '16px' }}><i className="fas fa-arrow-left"></i> Antes</h4>
              <ul style={{ listStyle: 'none', color: '#c8d2df' }}>
                <li style={{ marginBottom: '12px', paddingBottom: '12px', borderBottom: '1px solid rgba(255,255,255,0.03)' }}>
                  La inspección terminaba cuando se enviaba el informe
                </li>
                <li style={{ marginBottom: '12px', paddingBottom: '12px', borderBottom: '1px solid rgba(255,255,255,0.03)' }}>
                  Cada revisión era independiente
                </li>
                <li style={{ marginBottom: '12px', paddingBottom: '12px', borderBottom: '1px solid rgba(255,255,255,0.03)' }}>
                  La experiencia permanecía en las personas
                </li>
                <li>
                  Cada temporada comenzaba prácticamente desde cero
                </li>
              </ul>
            </div>
            <div style={{ background: 'rgba(46,204,113,0.03)', borderRadius: '20px', padding: '24px', border: '1px solid rgba(46,204,113,0.15)' }}>
              <h4 style={{ color: '#2ecc71', marginBottom: '16px' }}><i className="fas fa-arrow-right"></i> Ahora</h4>
              <ul style={{ listStyle: 'none', color: '#e0e8f0' }}>
                <li style={{ marginBottom: '12px', paddingBottom: '12px', borderBottom: '1px solid rgba(46,204,113,0.05)' }}>
                  <span className="highlight">La inspección comienza</span> cuando genera conocimiento
                </li>
                <li style={{ marginBottom: '12px', paddingBottom: '12px', borderBottom: '1px solid rgba(46,204,113,0.05)' }}>
                  Cada revisión <span className="highlight">fortalece la historia técnica</span> de la fruta
                </li>
                <li style={{ marginBottom: '12px', paddingBottom: '12px', borderBottom: '1px solid rgba(46,204,113,0.05)' }}>
                  La experiencia pasa a formar parte del <span className="highlight">patrimonio de la empresa</span>
                </li>
                <li>
                  Cada temporada <span className="highlight">aprende de la anterior</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* SLIDE 8: LA DIFERENCIA NO ESTÁ EN LOS DATOS */}
      <section className="slide" id="slide-7">
        <div className="container slide-content">
          <span className="badge"><i className="fas fa-brain"></i> La verdadera diferencia</span>
          <h2>La diferencia no está en los datos.<br />Está en la <span className="text-gradient">inteligencia</span> que generan</h2>
          <div className="grid-2">
            <div style={{ background: 'rgba(255,255,255,0.02)', borderRadius: '20px', padding: '24px', border: '1px solid rgba(255,255,255,0.05)' }}>
              <h4 style={{ color: '#8899aa', marginBottom: '16px' }}>Sistemas tradicionales</h4>
              <ul style={{ listStyle: 'none', color: '#c8d2df' }}>
                <li style={{ marginBottom: '12px' }}><i className="fas fa-times-circle" style={{ color: '#e74c3c', marginRight: '10px' }}></i> Administran información</li>
                <li style={{ marginBottom: '12px' }}><i className="fas fa-times-circle" style={{ color: '#e74c3c', marginRight: '10px' }}></i> Muestran lo que ocurrió</li>
                <li style={{ marginBottom: '12px' }}><i className="fas fa-times-circle" style={{ color: '#e74c3c', marginRight: '10px' }}></i> Registran inspecciones</li>
                <li><i className="fas fa-times-circle" style={{ color: '#e74c3c', marginRight: '10px' }}></i> Digitalizan procesos</li>
              </ul>
            </div>
            <div style={{ background: 'rgba(46,204,113,0.03)', borderRadius: '20px', padding: '24px', border: '1px solid rgba(46,204,113,0.15)' }}>
              <h4 style={{ color: '#2ecc71', marginBottom: '16px' }}>NX Quality</h4>
              <ul style={{ listStyle: 'none', color: '#e0e8f0' }}>
                <li style={{ marginBottom: '12px' }}><i className="fas fa-check-circle" style={{ color: '#2ecc71', marginRight: '10px' }}></i> <span className="highlight">Administra conocimiento</span></li>
                <li style={{ marginBottom: '12px' }}><i className="fas fa-check-circle" style={{ color: '#2ecc71', marginRight: '10px' }}></i> Ayuda a comprender <span className="highlight">por qué</span> ocurrió</li>
                <li style={{ marginBottom: '12px' }}><i className="fas fa-check-circle" style={{ color: '#2ecc71', marginRight: '10px' }}></i> Construye <span className="highlight">memoria técnica</span></li>
                <li><i className="fas fa-check-circle" style={{ color: '#2ecc71', marginRight: '10px' }}></i> Preserva la <span className="highlight">experiencia acumulada</span></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* PARTE III: POR QUÉ NX QUALITY ES DIFERENTE */}
      {/* ============================================================ */}

      {/* SLIDE 9: LA SIGUIENTE EVOLUCIÓN */}
      <section className="slide" id="slide-8">
        <div className="container slide-content">
          <span className="badge"><i className="fas fa-rocket"></i> La siguiente evolución</span>
          <h2>La siguiente evolución no es digitalizar.<br />Es <span className="text-gradient">aprender</span></h2>
          <div className="grid-2">
            <div>
              <p style={{ color: '#e0e8f0', marginBottom: '12px' }}>
                Durante los últimos años, la industria dio un paso muy importante: digitalizar procesos.
              </p>
              <p style={{ color: '#d0d9e5', marginBottom: '12px' }}>
                Hoy es posible registrar inspecciones desde un teléfono, generar informes en segundos y disponer de indicadores casi en tiempo real.
              </p>
              <p style={{ color: '#d0d9e5' }}>
                Ese avance transformó la operación. Pero el siguiente desafío ya no consiste en registrar más información.
              </p>
            </div>
            <div style={{ background: '#0f151c', borderRadius: '20px', padding: '28px', border: '1px solid rgba(46,204,113,0.1)' }}>
              <i className="fas fa-arrow-right" style={{ fontSize: '2rem', color: '#2ecc71', marginBottom: '12px' }}></i>
              <h4 style={{ color: '#fff', marginBottom: '8px' }}>El verdadero desafío</h4>
              <p style={{ color: '#d0d9e5' }}>
                Consiste en convertir esa información en <span className="highlight">conocimiento que permanezca</span> dentro de la empresa.
              </p>
              <div style={{ marginTop: '16px', background: 'rgba(46,204,113,0.05)', borderRadius: '12px', padding: '12px 16px', borderLeft: '4px solid #2ecc71' }}>
                <p style={{ color: '#e0e8f0', fontSize: '0.95rem' }}>
                  <i className="fas fa-quote-left" style={{ color: '#2ecc71', marginRight: '6px' }}></i>
                  La verdadera evolución comienza cuando cada inspección <span className="highlight">mejora la siguiente</span>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SLIDE 10: DOS FORMAS DE ENTENDER LA GESTIÓN DE CALIDAD */}
      <section className="slide" id="slide-9">
        <div className="container slide-content">
          <span className="badge"><i className="fas fa-balance-scale"></i> Dos enfoques</span>
          <h2>Dos formas de entender la <span className="text-gradient">gestión de calidad</span></h2>
          <p style={{ color: '#d0d9e5', marginBottom: '16px' }}>
            La diferencia no está en la tecnología. Está en la <span className="highlight">filosofía</span>.
          </p>
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.9rem' }}>
              <thead>
                <tr style={{ borderBottom: '2px solid #2ecc71' }}>
                  <th style={{ textAlign: 'left', padding: '12px 16px', color: '#8899aa', fontWeight: '600' }}>Gestión tradicional</th>
                  <th style={{ textAlign: 'left', padding: '12px 16px', color: '#2ecc71', fontWeight: '600' }}>NX Quality</th>
                </tr>
              </thead>
              <tbody>
                <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.04)' }}>
                  <td style={{ padding: '10px 16px', color: '#c8d2df' }}>Registra inspecciones</td>
                  <td style={{ padding: '10px 16px', color: '#e8edf2' }}><span className="highlight">Construye conocimiento</span></td>
                </tr>
                <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.04)' }}>
                  <td style={{ padding: '10px 16px', color: '#c8d2df' }}>Genera reportes</td>
                  <td style={{ padding: '10px 16px', color: '#e8edf2' }}><span className="highlight">Conserva la historia técnica</span></td>
                </tr>
                <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.04)' }}>
                  <td style={{ padding: '10px 16px', color: '#c8d2df' }}>Trabaja sobre lotes</td>
                  <td style={{ padding: '10px 16px', color: '#e8edf2' }}><span className="highlight">Trabaja sobre la identidad de la fruta</span></td>
                </tr>
                <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.04)' }}>
                  <td style={{ padding: '10px 16px', color: '#c8d2df' }}>Almacena fotografías</td>
                  <td style={{ padding: '10px 16px', color: '#e8edf2' }}><span className="highlight">Relaciona evidencia con decisiones</span></td>
                </tr>
                <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.04)' }}>
                  <td style={{ padding: '10px 16px', color: '#c8d2df' }}>Entrega información</td>
                  <td style={{ padding: '10px 16px', color: '#e8edf2' }}><span className="highlight">Entrega contexto para decidir</span></td>
                </tr>
                <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.04)' }}>
                  <td style={{ padding: '10px 16px', color: '#c8d2df' }}>Digitaliza procesos</td>
                  <td style={{ padding: '10px 16px', color: '#e8edf2' }}><span className="highlight">Preserva el conocimiento de la empresa</span></td>
                </tr>
                <tr>
                  <td style={{ padding: '10px 16px', color: '#c8d2df' }}>Analiza la temporada</td>
                  <td style={{ padding: '10px 16px', color: '#e8edf2' }}><span className="highlight">Aprende de cada temporada</span></td>
                </tr>
              </tbody>
            </table>
          </div>
          <div style={{ marginTop: '16px', textAlign: 'center' }}>
            <p style={{ color: '#d0d9e5', fontSize: '0.95rem' }}>
              <i className="fas fa-quote-left" style={{ color: '#2ecc71', marginRight: '6px' }}></i>
              No creemos que la industria necesite más datos. Creemos que necesita <span className="highlight">utilizar mejor los que ya genera</span>.
            </p>
          </div>
        </div>
      </section>

      {/* SLIDE 11: LOS PARADIGMAS QUE VENIMOS A CAMBIAR */}
      <section className="slide" id="slide-10">
        <div className="container slide-content">
          <span className="badge"><i className="fas fa-sync-alt"></i> Nuevos paradigmas</span>
          <h2>Los paradigmas que venimos a <span className="text-gradient">cambiar</span></h2>
          <div className="grid-2">
            <div style={{ background: 'rgba(255,255,255,0.02)', borderRadius: '20px', padding: '24px', border: '1px solid rgba(255,255,255,0.05)' }}>
              <h4 style={{ color: '#8899aa', marginBottom: '16px' }}><i className="fas fa-arrow-left"></i> Antes</h4>
              <ul style={{ listStyle: 'none', color: '#c8d2df' }}>
                <li style={{ marginBottom: '10px' }}>La calidad era un área</li>
                <li style={{ marginBottom: '10px' }}>Cada inspección terminaba con un informe</li>
                <li style={{ marginBottom: '10px' }}>La experiencia permanecía en las personas</li>
                <li style={{ marginBottom: '10px' }}>Cada temporada comenzaba casi desde cero</li>
                <li>La información servía para explicar lo que ocurrió</li>
              </ul>
            </div>
            <div style={{ background: 'rgba(46,204,113,0.03)', borderRadius: '20px', padding: '24px', border: '1px solid rgba(46,204,113,0.15)' }}>
              <h4 style={{ color: '#2ecc71', marginBottom: '16px' }}><i className="fas fa-arrow-right"></i> Ahora</h4>
              <ul style={{ listStyle: 'none', color: '#e0e8f0' }}>
                <li style={{ marginBottom: '10px' }}>La calidad impacta directamente la <span className="highlight">competitividad de toda la empresa</span></li>
                <li style={{ marginBottom: '10px' }}>Cada inspección alimenta una <span className="highlight">historia técnica</span> que sigue creciendo</li>
                <li style={{ marginBottom: '10px' }}>La experiencia pasa a formar parte del <span className="highlight">patrimonio de la empresa</span></li>
                <li style={{ marginBottom: '10px' }}>Cada temporada <span className="highlight">aprovecha el aprendizaje</span> de la anterior</li>
                <li>La información sirve para <span className="highlight">anticipar mejores decisiones</span></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* SLIDE 12: UNA EXPORTADORA NO PIERDE INFORMACIÓN */}
      <section className="slide" id="slide-11">
        <div className="container slide-content">
          <span className="badge"><i className="fas fa-user-graduate"></i> El verdadero costo</span>
          <h2>Una exportadora no pierde información.<br />Pierde <span className="text-gradient">años de experiencia</span></h2>
          <div className="grid-3">
            <div className="card" style={{ borderColor: 'rgba(231,76,60,0.2)' }}>
              <i className="fas fa-user-tie" style={{ color: '#e74c3c' }}></i>
              <h3 style={{ color: '#e74c3c' }}>Inspector se va</h3>
              <p>No solo se pierde una persona. También se pierde parte de los criterios que desarrolló durante años.</p>
            </div>
            <div className="card" style={{ borderColor: 'rgba(241,196,15,0.2)' }}>
              <i className="fas fa-user-clock" style={{ color: '#f1c40f' }}></i>
              <h3 style={{ color: '#f1c40f' }}>Gerente se jubila</h3>
              <p>Desaparecen miles de decisiones que nunca quedaron documentadas.</p>
            </div>
            <div className="card" style={{ borderColor: 'rgba(52,152,219,0.2)' }}>
              <i className="fas fa-calendar-alt" style={{ color: '#3498db' }}></i>
              <h3 style={{ color: '#3498db' }}>Termina la temporada</h3>
              <p>También termina una enorme cantidad de aprendizaje que no quedó registrado.</p>
            </div>
          </div>
          <div style={{ marginTop: '20px', background: 'rgba(46,204,113,0.05)', borderRadius: '16px', padding: '16px 24px', textAlign: 'center', border: '1px solid rgba(46,204,113,0.1)' }}>
            <p style={{ color: '#e0e8f0', fontSize: '1.05rem' }}>
              <i className="fas fa-arrow-right" style={{ color: '#2ecc71' }}></i>
              NX Quality nace para que ese conocimiento deje de depender exclusivamente de las personas y pase a formar parte del <span className="highlight">activo más valioso de la empresa</span>: su experiencia.
            </p>
          </div>
        </div>
      </section>

      {/* SLIDE 13: LA HISTORIA TÉCNICA DE LA FRUTA */}
      <section className="slide" id="slide-12">
        <div className="container slide-content">
          <span className="badge"><i className="fas fa-history"></i> El concepto clave</span>
          <h2>La <span className="text-gradient">Historia Técnica</span> de la fruta</h2>
          <div className="grid-2">
            <div>
              <p style={{ color: '#e0e8f0', marginBottom: '12px' }}>
                Tradicionalmente, la trazabilidad responde una pregunta:
              </p>
              <p style={{ fontSize: '1.2rem', color: '#d0d9e5', marginBottom: '16px', fontStyle: 'italic' }}>
                "¿Dónde estuvo esta fruta?"
              </p>
              <p style={{ color: '#e0e8f0', marginBottom: '12px' }}>
                Nosotros queremos responder una pregunta mucho más valiosa:
              </p>
              <p style={{ fontSize: '1.2rem', color: '#2ecc71', marginBottom: '16px' }}>
                <i className="fas fa-quote-left"></i> "¿Qué aprendimos de esta fruta?"
              </p>
              <ul className="benefit-list">
                <li><i className="fas fa-check-circle"></i> Cada inspección</li>
                <li><i className="fas fa-check-circle"></i> Cada fotografía</li>
                <li><i className="fas fa-check-circle"></i> Cada medición</li>
                <li><i className="fas fa-check-circle"></i> Cada observación</li>
                <li><i className="fas fa-check-circle"></i> Cada decisión</li>
              </ul>
            </div>
            <div style={{ background: '#0f151c', borderRadius: '24px', padding: '28px', border: '1px solid #1f2a33' }}>
              <i className="fas fa-fingerprint" style={{ fontSize: '2.5rem', color: '#2ecc71' }}></i>
              <h4 style={{ color: '#fff', margin: '10px 0 4px' }}>Una única Historia Técnica</h4>
              <p style={{ color: '#d0d9e5', fontSize: '0.95rem' }}>
                Una historia que acompaña a la fruta durante todo su ciclo y que permanece disponible para respaldar decisiones futuras.
              </p>
              <div style={{ marginTop: '16px', background: 'rgba(46,204,113,0.05)', borderRadius: '12px', padding: '12px 16px', borderLeft: '4px solid #2ecc71' }}>
                <p style={{ color: '#e0e8f0', fontSize: '0.9rem' }}>
                  <i className="fas fa-arrow-right" style={{ color: '#2ecc71' }}></i>
                  Productor: Agrícola Los Andes · Variedad: Hass · Cosecha: 15-01-2026
                </p>
                <p style={{ color: '#8899aa', fontSize: '0.85rem' }}>
                  <i className="fas fa-clipboard-list" style={{ color: '#2ecc71' }}></i> 12 eventos técnicos registrados
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SLIDE 14: EL VERDADERO PRODUCTO NO ES EL SOFTWARE */}
      <section className="slide" id="slide-13">
        <div className="container slide-content">
          <span className="badge"><i className="fas fa-gem"></i> El verdadero producto</span>
          <h2>El verdadero producto no es el software.<br />Es el <span className="text-gradient">conocimiento</span> que la empresa conserva</h2>
          <div className="grid-2">
            <div>
              <p style={{ color: '#d0d9e5', marginBottom: '12px' }}>
                Los sistemas pueden ser reemplazados. Los formularios pueden cambiar. La tecnología evolucionará.
              </p>
              <p style={{ color: '#d0d9e5', marginBottom: '12px' }}>
                Pero el <span className="highlight">conocimiento construido durante años</span> es irremplazable.
              </p>
              <div style={{ background: 'rgba(46,204,113,0.05)', borderRadius: '16px', padding: '16px 20px', borderLeft: '4px solid #2ecc71' }}>
                <p style={{ color: '#e0e8f0', fontSize: '1.05rem' }}>
                  <i className="fas fa-quote-left" style={{ color: '#2ecc71', marginRight: '6px' }}></i>
                  La próxima ventaja competitiva de las exportadoras no estará únicamente en producir mejor fruta.
                </p>
                <p style={{ color: '#e0e8f0', fontSize: '1.05rem', marginTop: '4px' }}>
                  Estará en <span className="highlight">proteger, organizar y aprovechar</span> el conocimiento técnico que generan todos los días.
                </p>
              </div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', background: 'rgba(255,255,255,0.02)', borderRadius: '24px', padding: '28px', border: '1px solid rgba(255,255,255,0.05)' }}>
              <i className="fas fa-arrow-right" style={{ fontSize: '2rem', color: '#2ecc71', marginBottom: '12px' }}></i>
              <p style={{ color: '#8899aa', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.5px' }}>El verdadero producto de NX Quality</p>
              <p style={{ fontSize: '1.6rem', color: '#e8edf2', fontWeight: '700' }}>El conocimiento</p>
              <p style={{ color: '#d0d9e5' }}>que la empresa conserva</p>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* PARTE IV: EL VALOR PARA LA EMPRESA */}
      {/* ============================================================ */}

      {/* SLIDE 15: LA PREGUNTA YA NO ES SI USTED INSPECCIONA */}
      <section className="slide" id="slide-14">
        <div className="container slide-content">
          <span className="badge"><i className="fas fa-question-circle"></i> La pregunta clave</span>
          <h2>La pregunta ya no es si usted inspecciona su fruta.<br />La pregunta es <span className="text-gradient">qué hace con ese conocimiento</span></h2>
          <div className="grid-2">
            <div>
              <p style={{ color: '#e0e8f0', marginBottom: '12px' }}>
                Cada día su empresa genera cientos de decisiones técnicas.
              </p>
              <ul className="benefit-list">
                <li><i className="fas fa-check-circle"></i> Cada inspector aporta experiencia</li>
                <li><i className="fas fa-check-circle"></i> Cada fotografía registra evidencia</li>
                <li><i className="fas fa-check-circle"></i> Cada revisión deja aprendizajes</li>
              </ul>
            </div>
            <div style={{ background: '#0f151c', borderRadius: '20px', padding: '28px', border: '1px solid rgba(46,204,113,0.1)' }}>
              <p style={{ color: '#d0d9e5', fontSize: '1.1rem' }}>
                La verdadera pregunta no es cuánta información genera.
              </p>
              <p style={{ color: '#d0d9e5', fontSize: '1.1rem', marginTop: '8px' }}>
                La verdadera pregunta es <span className="highlight">cuánto de ese conocimiento sigue disponible</span> seis meses después.
              </p>
              <p style={{ color: '#8899aa', fontSize: '0.95rem', marginTop: '8px' }}>
                O la próxima temporada. O dentro de cinco años.
              </p>
              <div style={{ marginTop: '16px', background: 'rgba(46,204,113,0.05)', borderRadius: '12px', padding: '12px 16px', borderLeft: '4px solid #2ecc71' }}>
                <p style={{ color: '#e0e8f0', fontSize: '0.95rem' }}>
                  Las empresas que aprendan a conservar ese conocimiento serán las que <span className="highlight">tomarán mejores decisiones</span>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SLIDE 16: ¿QUÉ GANA UNA EXPORTADORA? */}
      <section className="slide" id="slide-15">
        <div className="container slide-content">
          <span className="badge"><i className="fas fa-gift"></i> El valor para la empresa</span>
          <h2>¿Qué gana una <span className="text-gradient">exportadora</span>?</h2>
          <p style={{ color: '#d0d9e5', marginBottom: '16px' }}>
            Mucho más que un nuevo sistema.
          </p>
          <div className="grid-2">
            <ul className="benefit-list" style={{ gridTemplateColumns: '1fr' }}>
              <li><i className="fas fa-check-circle"></i> Mayor respaldo para las decisiones técnicas</li>
              <li><i className="fas fa-check-circle"></i> Información disponible cuando realmente se necesita</li>
              <li><i className="fas fa-check-circle"></i> Mayor consistencia entre inspectores y equipos</li>
              <li><i className="fas fa-check-circle"></i> Menor dependencia del conocimiento individual</li>
              <li><i className="fas fa-check-circle"></i> Mejor capacidad para responder auditorías y reclamos</li>
              <li><i className="fas fa-check-circle"></i> Mayor trazabilidad técnica</li>
              <li><i className="fas fa-check-circle"></i> Base histórica para comparar temporadas, productores y variedades</li>
              <li><i className="fas fa-check-circle"></i> Una organización que aprende continuamente</li>
            </ul>
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', background: 'rgba(46,204,113,0.03)', borderRadius: '20px', padding: '28px', border: '1px solid rgba(46,204,113,0.1)' }}>
              <i className="fas fa-arrow-right" style={{ fontSize: '2rem', color: '#2ecc71', marginBottom: '12px' }}></i>
              <p style={{ fontSize: '1.3rem', color: '#e8edf2', fontWeight: '600' }}>
                No se trata de trabajar más.
              </p>
              <p style={{ fontSize: '1.3rem', color: '#2ecc71', fontWeight: '700' }}>
                Se trata de decidir mejor.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SLIDE 17: EL CONOCIMIENTO TAMBIÉN ES PATRIMONIO */}
      <section className="slide" id="slide-16">
        <div className="container slide-content">
          <span className="badge"><i className="fas fa-building"></i> Patrimonio invisible</span>
          <h2>El conocimiento también es <span className="text-gradient">patrimonio</span></h2>
          <p style={{ color: '#d0d9e5', marginBottom: '16px' }}>
            Y normalmente no aparece en el balance.
          </p>
          <div className="grid-2">
            <div>
              <p style={{ color: '#e0e8f0', marginBottom: '12px' }}>
                Las empresas invierten millones en infraestructura. En frigoríficos. En packing. En maquinaria. En tecnología.
              </p>
              <p style={{ color: '#e0e8f0', marginBottom: '12px' }}>
                Pero existe un activo mucho más difícil de construir:
              </p>
              <ul className="benefit-list">
                <li><i className="fas fa-check-circle"></i> La experiencia acumulada durante años</li>
                <li><i className="fas fa-check-circle"></i> Cada decisión correcta</li>
                <li><i className="fas fa-check-circle"></i> Cada error evitado</li>
                <li><i className="fas fa-check-circle"></i> Cada patrón identificado</li>
                <li><i className="fas fa-check-circle"></i> Cada aprendizaje técnico</li>
              </ul>
            </div>
            <div style={{ background: '#0f151c', borderRadius: '20px', padding: '28px', border: '1px solid rgba(46,204,113,0.1)' }}>
              <i className="fas fa-exclamation-triangle" style={{ fontSize: '2.5rem', color: '#f1c40f' }}></i>
              <h4 style={{ color: '#fff', margin: '12px 0 8px' }}>Ese conocimiento rara vez está protegido.</h4>
              <p style={{ color: '#d0d9e5' }}>
                NX Quality nace para convertir ese <span className="highlight">patrimonio invisible</span> en un <span className="highlight">activo permanente</span> de la empresa.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SLIDE 18: PREPARADO PARA LOS NUEVOS MERCADOS */}
      <section className="slide" id="slide-17">
        <div className="container slide-content">
          <span className="badge"><i className="fas fa-globe-americas"></i> Preparado para el futuro</span>
          <h2>Preparado para los <span className="text-gradient">nuevos mercados</span></h2>
          <p style={{ color: '#d0d9e5', marginBottom: '16px' }}>
            Porque las exigencias seguirán creciendo.
          </p>
          <div className="grid-2">
            <div>
              <p style={{ color: '#e0e8f0', marginBottom: '12px' }}>
                Hoy ya no basta con demostrar que una inspección fue realizada.
              </p>
              <p style={{ color: '#d0d9e5', marginBottom: '12px' }}>
                Será cada vez más importante demostrar:
              </p>
              <ul className="benefit-list">
                <li><i className="fas fa-check-circle"></i> Cómo se tomó una decisión</li>
                <li><i className="fas fa-check-circle"></i> Qué evidencia la respaldó</li>
                <li><i className="fas fa-check-circle"></i> Qué antecedentes históricos existían</li>
                <li><i className="fas fa-check-circle"></i> Qué acciones correctivas fueron implementadas</li>
                <li><i className="fas fa-check-circle"></i> Qué ocurrió antes y después</li>
              </ul>
            </div>
            <div style={{ background: '#0f151c', borderRadius: '20px', padding: '28px', border: '1px solid rgba(46,204,113,0.1)' }}>
              <i className="fas fa-rocket" style={{ fontSize: '2.5rem', color: '#2ecc71' }}></i>
              <h4 style={{ color: '#fff', margin: '12px 0 8px' }}>Diseñado para los próximos diez años</h4>
              <p style={{ color: '#d0d9e5' }}>
                Las empresas que puedan responder esas preguntas con rapidez y confianza estarán <span className="highlight">mejor preparadas para competir</span>.
              </p>
              <p style={{ color: '#8899aa', fontSize: '0.9rem', marginTop: '12px' }}>
                NX Quality fue concebido pensando en esa realidad. No en la de ayer.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SLIDE 19: LA DECISIÓN ES ESTRATÉGICA */}
      <section className="slide" id="slide-18">
        <div className="container slide-content">
          <span className="badge"><i className="fas fa-chess-queen"></i> Decisión estratégica</span>
          <h2>La decisión es <span className="text-gradient">estratégica</span></h2>
          <p style={{ color: '#d0d9e5', marginBottom: '16px' }}>
            No tecnológica.
          </p>
          <div className="grid-2">
            <div>
              <p style={{ color: '#e0e8f0', marginBottom: '12px' }}>
                Las tecnologías cambian. Los sistemas evolucionan. Los dispositivos se reemplazan.
              </p>
              <p style={{ color: '#d0d9e5', marginBottom: '12px' }}>
                Pero las empresas que logran <span className="highlight">conservar y aprovechar su conocimiento</span> construyen una ventaja que permanece.
              </p>
            </div>
            <div style={{ background: 'rgba(46,204,113,0.03)', borderRadius: '20px', padding: '28px', border: '1px solid rgba(46,204,113,0.1)' }}>
              <p style={{ color: '#e0e8f0', fontSize: '1.05rem' }}>
                Creemos que la próxima gran diferencia entre las exportadoras no estará únicamente en producir mejor fruta.
              </p>
              <p style={{ color: '#e0e8f0', fontSize: '1.05rem', marginTop: '8px' }}>
                Estará en <span className="highlight">quién aprende más rápido</span>.
              </p>
              <p style={{ color: '#e0e8f0', fontSize: '1.05rem', marginTop: '4px' }}>
                Quién <span className="highlight">conserva mejor su experiencia</span>.
              </p>
              <p style={{ color: '#e0e8f0', fontSize: '1.05rem', marginTop: '4px' }}>
                Y quién transforma ese conocimiento en <span className="highlight">mejores decisiones</span>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* PARTE V: LA PRÓXIMA VENTAJA COMPETITIVA */}
      {/* ============================================================ */}

      {/* SLIDE 20: LA CALIDAD YA NO ES UNA VENTAJA */}
      <section className="slide" id="slide-19">
        <div className="container slide-content">
          <span className="badge"><i className="fas fa-trophy"></i> El nuevo escenario</span>
          <h2>La calidad ya no es una ventaja.<br />Es el <span className="text-gradient">punto de partida</span></h2>
          <div className="grid-2">
            <div>
              <p style={{ color: '#e0e8f0', marginBottom: '12px' }}>
                Durante años, producir fruta de calidad fue el gran diferenciador de una exportadora.
              </p>
              <p style={{ color: '#d0d9e5', marginBottom: '12px' }}>
                Hoy eso ya no basta.
              </p>
              <ul className="benefit-list">
                <li><i className="fas fa-check-circle"></i> Los mercados esperan calidad</li>
                <li><i className="fas fa-check-circle"></i> Los clientes esperan calidad</li>
                <li><i className="fas fa-check-circle"></i> Las auditorías esperan calidad</li>
              </ul>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', background: 'rgba(46,204,113,0.03)', borderRadius: '24px', padding: '28px', border: '1px solid rgba(46,204,113,0.1)' }}>
              <p style={{ fontSize: '1.8rem', color: '#e8edf2', textAlign: 'center', fontWeight: '600' }}>
                La calidad dejó de ser un elemento diferenciador.
              </p>
              <p style={{ fontSize: '1.8rem', color: '#2ecc71', textAlign: 'center', fontWeight: '700' }}>
                Se convirtió en el estándar mínimo.
              </p>
              <p style={{ color: '#d0d9e5', textAlign: 'center', marginTop: '12px' }}>
                La próxima ventaja competitiva estará en otro lugar.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SLIDE 21: LA DIFERENCIA ESTARÁ EN QUIÉN APRENDA MÁS RÁPIDO */}
      <section className="slide" id="slide-20">
        <div className="container slide-content">
          <span className="badge"><i className="fas fa-brain"></i> La nueva ventaja</span>
          <h2>La diferencia estará en <span className="text-gradient">quién aprenda más rápido</span></h2>
          <p style={{ color: '#d0d9e5', marginBottom: '16px' }}>
            No todas las empresas evolucionarán al mismo ritmo.
          </p>
          <div className="grid-2">
            <div style={{ background: 'rgba(255,255,255,0.02)', borderRadius: '20px', padding: '24px', border: '1px solid rgba(255,255,255,0.05)' }}>
              <h4 style={{ color: '#8899aa', marginBottom: '16px' }}>Algunas empresas...</h4>
              <ul style={{ listStyle: 'none', color: '#c8d2df' }}>
                <li style={{ marginBottom: '10px' }}>Seguirán registrando información</li>
                <li style={{ marginBottom: '10px' }}>Seguirán reaccionando a los problemas</li>
                <li style={{ marginBottom: '10px' }}>Dependerán del conocimiento de personas específicas</li>
              </ul>
            </div>
            <div style={{ background: 'rgba(46,204,113,0.03)', borderRadius: '20px', padding: '24px', border: '1px solid rgba(46,204,113,0.15)' }}>
              <h4 style={{ color: '#2ecc71', marginBottom: '16px' }}>Otras empresas...</h4>
              <ul style={{ listStyle: 'none', color: '#e0e8f0' }}>
                <li style={{ marginBottom: '10px' }}>Comenzarán a convertir esa información en <span className="highlight">decisiones más inteligentes</span></li>
                <li style={{ marginBottom: '10px' }}>Serán capaces de <span className="highlight">anticipar</span> los problemas</li>
                <li style={{ marginBottom: '10px' }}>Construirán un <span className="highlight">patrimonio técnico</span> que permanecerá en la organización</li>
              </ul>
            </div>
          </div>
          <div style={{ marginTop: '16px', textAlign: 'center' }}>
            <p style={{ color: '#d0d9e5' }}>
              <i className="fas fa-arrow-right" style={{ color: '#2ecc71' }}></i>
              La diferencia no será tecnológica. Será <span className="highlight">estratégica</span>.
            </p>
          </div>
        </div>
      </section>

      {/* SLIDE 22: IMAGINE SU EMPRESA EN CINCO AÑOS */}
      <section className="slide" id="slide-21">
        <div className="container slide-content">
          <span className="badge"><i className="fas fa-eye"></i> La visión a futuro</span>
          <h2>Imagine su empresa en <span className="text-gradient">cinco años</span></h2>
          <p style={{ color: '#d0d9e5', marginBottom: '16px' }}>
            ¿Qué organización quiere construir?
          </p>
          <div className="grid-3">
            <div className="card">
              <i className="fas fa-sync-alt"></i>
              <h3>Aprendizaje continuo</h3>
              <p>Donde cada inspección fortalece la siguiente y cada temporada enriquece la anterior.</p>
            </div>
            <div className="card">
              <i className="fas fa-camera"></i>
              <h3>Decisiones con evidencia</h3>
              <p>Donde cada fotografía reduce la incertidumbre de una decisión.</p>
            </div>
            <div className="card">
              <i className="fas fa-users"></i>
              <h3>Conocimiento permanente</h3>
              <p>Donde el conocimiento permanece, aunque cambien las personas.</p>
            </div>
            <div className="card">
              <i className="fas fa-brain"></i>
              <h3>Decisiones independientes</h3>
              <p>Donde las decisiones no dependen únicamente de la memoria de un inspector o gerente.</p>
            </div>
            <div className="card">
              <i className="fas fa-graduation-cap"></i>
              <h3>Organización que aprende</h3>
              <p>Una organización que aprende todos los días y nunca vuelve a comenzar desde cero.</p>
            </div>
          </div>
          <div style={{ marginTop: '16px', textAlign: 'center' }}>
            <p style={{ color: '#d0d9e5', fontSize: '1.05rem' }}>
              <i className="fas fa-arrow-right" style={{ color: '#2ecc71' }}></i>
              <span className="highlight">Ese es el verdadero propósito de NX Quality.</span>
            </p>
          </div>
        </div>
      </section>

      {/* SLIDE 23: NX QUALITY NO ES UNA INVERSIÓN EN SOFTWARE */}
      <section className="slide" id="slide-22">
        <div className="container slide-content">
          <span className="badge"><i className="fas fa-chart-line"></i> Una inversión estratégica</span>
          <h2>NX Quality no es una inversión en software.<br />Es una inversión en la capacidad de su empresa para <span className="text-gradient">decidir mejor</span></h2>
          <div className="grid-2">
            <div>
              <p style={{ color: '#e0e8f0', marginBottom: '12px' }}>
                Las plataformas tecnológicas evolucionan. Los dispositivos cambian. Los procesos mejoran.
              </p>
              <p style={{ color: '#d0d9e5', marginBottom: '12px' }}>
                Pero las organizaciones que <span className="highlight">aprenden más rápido</span> generan ventajas que son extremadamente difíciles de copiar.
              </p>
              <div style={{ background: 'rgba(46,204,113,0.05)', borderRadius: '16px', padding: '16px 20px', borderLeft: '4px solid #2ecc71' }}>
                <p style={{ color: '#e0e8f0', fontSize: '0.95rem' }}>
                  NX Quality no busca reemplazar la experiencia de las personas.
                </p>
                <p style={{ color: '#e0e8f0', fontSize: '0.95rem', marginTop: '4px' }}>
                  Busca <span className="highlight">amplificarla</span>, <span className="highlight">protegerla</span> y convertirla en uno de los activos estratégicos más valiosos de la empresa.
                </p>
              </div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', background: '#0f151c', borderRadius: '24px', padding: '28px', border: '1px solid #1f2a33' }}>
              <p style={{ color: '#8899aa', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Resultados</p>
              <p style={{ fontSize: '1.2rem', color: '#e8edf2' }}>
                Una mejor decisión puede cambiar el destino de una partida.
              </p>
              <p style={{ fontSize: '1.2rem', color: '#2ecc71', marginTop: '8px' }}>
                Miles de mejores decisiones pueden cambiar el destino de una empresa.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SLIDE 24: NUESTRA CONVICCIÓN + CIERRE + CONTACTO */}
      <section className="slide" id="slide-23">
        <div className="container slide-content slide-cierre">
          <span className="badge"><i className="fas fa-heart"></i> Nuestra convicción</span>

          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <p style={{ fontSize: '1.2rem', color: '#e0e8f0', marginBottom: '16px' }}>
              No creemos que la industria necesite otro sistema de inspecciones.
            </p>
            <p style={{ fontSize: '1.2rem', color: '#d0d9e5', marginBottom: '24px' }}>
              Creemos que necesita una <span className="highlight">nueva forma de gestionar el conocimiento</span> que genera todos los días.
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginBottom: '32px' }}>
              <div style={{ background: 'rgba(255,255,255,0.02)', padding: '12px 16px', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.05)' }}>
                <p style={{ color: '#d0d9e5', fontSize: '0.95rem' }}><i className="fas fa-check" style={{ color: '#2ecc71', marginRight: '8px' }}></i> Preservar la experiencia</p>
              </div>
              <div style={{ background: 'rgba(255,255,255,0.02)', padding: '12px 16px', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.05)' }}>
                <p style={{ color: '#d0d9e5', fontSize: '0.95rem' }}><i className="fas fa-check" style={{ color: '#2ecc71', marginRight: '8px' }}></i> Conectar la información</p>
              </div>
              <div style={{ background: 'rgba(255,255,255,0.02)', padding: '12px 16px', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.05)' }}>
                <p style={{ color: '#d0d9e5', fontSize: '0.95rem' }}><i className="fas fa-check" style={{ color: '#2ecc71', marginRight: '8px' }}></i> Respaldar las decisiones</p>
              </div>
              <div style={{ background: 'rgba(255,255,255,0.02)', padding: '12px 16px', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.05)' }}>
                <p style={{ color: '#d0d9e5', fontSize: '0.95rem' }}><i className="fas fa-check" style={{ color: '#2ecc71', marginRight: '8px' }}></i> Construir memoria técnica</p>
              </div>
            </div>

            <div style={{ background: 'rgba(46,204,113,0.05)', borderRadius: '20px', padding: '28px', border: '1px solid rgba(46,204,113,0.1)', marginBottom: '32px' }}>
              <p style={{ fontSize: '1.1rem', color: '#e0e8f0' }}>
                Transformar años de operación en una <span className="highlight">ventaja competitiva permanente</span>.
              </p>
              <p style={{ color: '#8899aa', fontSize: '0.9rem', marginTop: '4px' }}>
                Esa es la visión que dio origen a NX Quality.
              </p>
            </div>

            <hr style={{ border: '0.5px solid #1f2a33', margin: '32px 0' }} />

            <div style={{ marginBottom: '32px' }}>
              <p style={{ fontSize: '1.3rem', color: '#e8edf2', fontWeight: '300' }}>
                La próxima ventaja competitiva no estará únicamente en producir mejor fruta.
              </p>
              <p style={{ fontSize: '1.3rem', color: '#2ecc71', fontWeight: '600', marginTop: '4px' }}>
                Estará en quién sea capaz de transformar cada temporada en conocimiento.
              </p>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '32px' }}>
              <p style={{ fontSize: '1.1rem', color: '#e8edf2' }}>
                <span className="highlight">Calidad</span> genera información.
              </p>
              <p style={{ fontSize: '1.1rem', color: '#e8edf2' }}>
                <span className="highlight">Información</span> genera conocimiento.
              </p>
              <p style={{ fontSize: '1.1rem', color: '#e8edf2' }}>
                <span className="highlight">Conocimiento</span> genera mejores decisiones.
              </p>
              <p style={{ fontSize: '1.1rem', color: '#e8edf2' }}>
                <span className="highlight">Mejores decisiones</span> construyen mejores empresas.
              </p>
            </div>

            {/* ===== CONTACTO ===== */}
            <div style={{
              background: 'rgba(255,255,255,0.02)',
              borderRadius: '20px',
              padding: '28px 32px',
              border: '1px solid rgba(46,204,113,0.15)',
              marginBottom: '24px'
            }}>
              <p style={{ color: '#8899aa', fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '8px' }}>
                <i className="fas fa-phone" style={{ color: '#2ecc71', marginRight: '8px' }}></i> Contacto
              </p>
              <p style={{ color: '#e8edf2', fontSize: '1.1rem', fontWeight: '600' }}>
                Rodrigo Chandia · CEO
              </p>
              <p style={{ color: '#d0d9e5', fontSize: '0.95rem' }}>
                <i className="fas fa-envelope" style={{ color: '#2ecc71', marginRight: '8px', width: '20px' }}></i>
                <a href="mailto:rodrigo@nxchile.com" style={{ color: '#d0d9e5', textDecoration: 'none' }}>rodrigo@nxchile.com</a>
              </p>
              <p style={{ color: '#d0d9e5', fontSize: '0.95rem' }}>
                <i className="fab fa-whatsapp" style={{ color: '#2ecc71', marginRight: '8px', width: '20px' }}></i>
                <a href="https://wa.me/56977412178" style={{ color: '#d0d9e5', textDecoration: 'none' }}>+56 9 7741 2178</a>
              </p>
              <p style={{ color: '#d0d9e5', fontSize: '0.95rem' }}>
                <i className="fas fa-globe" style={{ color: '#2ecc71', marginRight: '8px', width: '20px' }}></i>
                <a href="https://www.nxchile.com" style={{ color: '#d0d9e5', textDecoration: 'none' }}>www.nxchile.com</a>
              </p>
            </div>

            {/* ===== BOTÓN CTA A WHATSAPP ===== */}
            <div style={{ display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <a 
                href="https://wa.me/56977412178?text=Hola%20Rodrigo%2C%20vi%20la%20presentaci%C3%B3n%20NX%20Quality%20y%20quiero%20conocer%20m%C3%A1s%20sobre%20c%C3%B3mo%20puedo%20ser%20parte%20del%20programa%20Founding%20Partners" 
                className="btn-primary" 
                style={{ fontSize: '1.1rem', padding: '16px 48px' }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-whatsapp"></i> Quiero conocer más
              </a>
            </div>
          </div>

          <hr style={{ border: '0.5px solid #1f2a33', margin: '40px 0 28px' }} />

          <h1 style={{ fontSize: '3.6rem' }}>Cada fruta tiene una historia.</h1>
          <p className="frase-final">
            <i className="fas fa-circle"></i>
            Nuestra misión es que nunca vuelva a perderse
            <i className="fas fa-circle"></i>
          </p>

          <div style={{ marginTop: '28px', color: '#8899aa', display: 'flex', justifyContent: 'center', gap: '32px', flexWrap: 'wrap', fontSize: '0.85rem' }}>
            <span><i className="fas fa-lock"></i> Confidencial</span>
            <span>NX Quality · Versión 2.0</span>
            <span><i className="fas fa-globe"></i> nxchile.com</span>
          </div>
        </div>
      </section>

      {/* ===== BOTONES DE NAVEGACIÓN ===== */}
      <div className="nav-buttons">
        <button
          className={`nav-btn ${currentSlide === 0 ? 'disabled' : ''}`}
          onClick={goToPrev}
          aria-label="Slide anterior"
        >
          <i className="fas fa-chevron-up"></i>
        </button>
        <button
          className={`nav-btn ${currentSlide === totalSlides - 1 ? 'disabled' : ''}`}
          onClick={goToNext}
          aria-label="Slide siguiente"
        >
          <i className="fas fa-chevron-down"></i>
        </button>
      </div>

      {/* ===== INDICADOR DE PROGRESO ===== */}
      <div className="progress-indicator">
        {Array.from({ length: totalSlides }).map((_, index) => (
          <span
            key={index}
            className={`progress-dot ${currentSlide === index ? 'active' : ''}`}
            onClick={() => goToSlide(index)}
            style={{ cursor: 'pointer' }}
          />
        ))}
      </div>

      <style>{`
        /* ===== RESET Y BASE ===== */
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        body {
          background: #0a0e14;
          font-family: 'Inter', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
          color: #e8edf2;
          line-height: 1.6;
          overflow-x: hidden;
        }

        ::-webkit-scrollbar {
          width: 6px;
        }
        ::-webkit-scrollbar-track {
          background: #1a1f26;
        }
        ::-webkit-scrollbar-thumb {
          background: #2ecc71;
          border-radius: 8px;
        }

        .container {
          max-width: 1120px;
          margin: 0 auto;
          padding: 0 28px;
        }

        /* ===== SLIDES: OCUPAN TODA LA PANTALLA ===== */
        .slide {
          min-height: 100vh;
          height: 100vh;
          display: flex;
          align-items: center;
          padding: 80px 0 100px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.04);
          position: relative;
          overflow-y: auto;
        }
        .slide:last-of-type {
          border-bottom: none;
        }

        .slide-content {
          width: 100%;
          padding-bottom: 20px;
        }

        /* ===== TIPOGRAFÍA ===== */
        h1 {
          font-size: 4rem;
          font-weight: 800;
          letter-spacing: -0.03em;
          line-height: 1.1;
        }
        h1 .gradient {
          background: linear-gradient(135deg, #2ecc71, #27ae60, #2ecc71);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        h2 {
          font-size: 2.8rem;
          font-weight: 700;
          letter-spacing: -0.02em;
          line-height: 1.2;
          margin-bottom: 1.2rem;
          color: #e8edf2;
        }
        h2 i {
          color: #2ecc71;
          margin-right: 12px;
        }
        .text-gradient {
          background: linear-gradient(135deg, #2ecc71, #27ae60);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          display: inline-block;
        }
        .highlight {
          color: #2ecc71;
          font-weight: 600;
        }

        .badge {
          display: inline-block;
          background: rgba(46, 204, 113, 0.12);
          color: #2ecc71;
          padding: 6px 20px;
          border-radius: 40px;
          font-size: 0.75rem;
          font-weight: 700;
          letter-spacing: 0.8px;
          text-transform: uppercase;
          margin-bottom: 1.2rem;
          border: 1px solid rgba(46, 204, 113, 0.15);
        }

        .btn-primary {
          display: inline-block;
          background: #2ecc71;
          color: #0a0e14;
          font-weight: 700;
          padding: 14px 42px;
          border-radius: 50px;
          text-decoration: none;
          transition: all 0.3s ease;
          font-size: 1rem;
          border: none;
          cursor: pointer;
          box-shadow: 0 8px 24px rgba(46, 204, 113, 0.25);
        }
        .btn-primary:hover {
          background: #27ae60;
          transform: translateY(-3px);
          box-shadow: 0 14px 34px rgba(46, 204, 113, 0.4);
        }

        /* ===== TARJETAS ===== */
        .grid-2 {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 32px;
          margin-top: 20px;
        }
        .grid-3 {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 28px;
          margin-top: 20px;
        }

        .card {
          background: rgba(255, 255, 255, 0.03);
          backdrop-filter: blur(4px);
          border: 1px solid rgba(255, 255, 255, 0.06);
          padding: 28px 24px;
          border-radius: 24px;
          transition: all 0.35s ease;
        }
        .card:hover {
          background: rgba(255, 255, 255, 0.06);
          border-color: #2ecc71;
          transform: translateY(-6px);
          box-shadow: 0 20px 48px rgba(0, 0, 0, 0.4);
        }
        .card i {
          font-size: 2.5rem;
          color: #2ecc71;
          margin-bottom: 16px;
          display: inline-block;
        }
        .card h3 {
          font-size: 1.3rem;
          color: #e8edf2;
          margin-bottom: 8px;
        }
        .card p {
          color: #c8d2df;
          font-size: 0.95rem;
        }

        /* ===== BENEFICIOS LISTA ===== */
        .benefit-list {
          list-style: none;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 8px 24px;
          margin: 16px 0;
        }
        .benefit-list li {
          display: flex;
          align-items: center;
          gap: 10px;
          color: #d0d9e5;
          font-size: 0.95rem;
        }
        .benefit-list li i {
          color: #2ecc71;
          font-size: 1rem;
          width: 20px;
        }

        /* ===== SECCIÓN CIERRE ===== */
        .slide-cierre {
          text-align: center;
        }
        .slide-cierre h1 {
          font-size: 3.6rem;
        }
        .slide-cierre .frase-final {
          font-size: 1.6rem;
          color: #c8d2df;
          margin-top: 12px;
          letter-spacing: 1px;
        }
        .slide-cierre .frase-final i {
          color: #2ecc71;
          margin: 0 10px;
          font-size: 0.7rem;
          vertical-align: middle;
        }

        /* ===== BOTONES DE NAVEGACIÓN ===== */
        .nav-buttons {
          position: fixed;
          bottom: 200px;
          right: 30px;
          display: flex;
          flex-direction: column;
          gap: 10px;
          z-index: 1000;
        }
        .nav-btn {
          width: 48px;
          height: 48px;
          border-radius: 50%;
          background: rgba(10, 14, 20, 0.85);
          backdrop-filter: blur(8px);
          border: 1px solid rgba(46, 204, 113, 0.25);
          color: #e8edf2;
          font-size: 1.2rem;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.5);
          text-decoration: none;
        }
        .nav-btn:hover {
          background: #2ecc71;
          color: #0a0e14;
          border-color: #2ecc71;
          transform: scale(1.08);
        }
        .nav-btn.disabled {
          opacity: 0.3;
          pointer-events: none;
        }

        .progress-indicator {
          position: fixed;
          bottom: 32px;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          gap: 8px;
          z-index: 999;
          background: rgba(10, 14, 20, 0.7);
          backdrop-filter: blur(6px);
          padding: 8px 16px;
          border-radius: 40px;
          border: 1px solid rgba(255, 255, 255, 0.06);
        }
        .progress-dot {
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.15);
          transition: all 0.4s ease;
          cursor: pointer;
        }
        .progress-dot.active {
          background: #2ecc71;
          box-shadow: 0 0 16px rgba(46, 204, 113, 0.4);
          width: 28px;
          border-radius: 20px;
        }
        .progress-dot:hover {
          background: rgba(46, 204, 113, 0.4);
        }

        /* ===== OCULTAR HEADER, FOOTER Y FLOTANTES DEL SITIO PRINCIPAL ===== */
        header,
        .Header,
        .header,
        nav.navbar,
        .navbar,
        [role="banner"],
        footer,
        .Footer,
        .footer,
        [class*="Float"],
        .whatsapp-float,
        .instagram-float,
        [class*="flotante"],
        [class*="floating"],
        .fixed.bottom-\\[100px\\],
        .fixed.bottom-\\[120px\\] {
          display: none !important;
        }

        body {
          padding-top: 0 !important;
          margin-top: 0 !important;
        }

        main {
          padding-top: 0 !important;
          margin-top: 0 !important;
        }

        header.fixed,
        header.sticky,
        .Header.fixed,
        .Header.sticky,
        header[style*="fixed"],
        header[style*="sticky"] {
          position: static !important;
          display: none !important;
        }

        /* ===== RESPONSIVE ===== */
        @media (max-width: 1024px) {
          h1 {
            font-size: 3rem;
          }
          h2 {
            font-size: 2.2rem;
          }
          .grid-3 {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 768px) {
          .slide {
            min-height: 100vh;
            height: auto;
            padding: 60px 0 120px;
          }

          h1 {
            font-size: 2.2rem;
          }
          h2 {
            font-size: 1.8rem;
            line-height: 1.3;
          }
          .grid-2 {
            grid-template-columns: 1fr;
            gap: 20px;
          }
          .grid-3 {
            grid-template-columns: 1fr;
            gap: 16px;
          }
          .benefit-list {
            grid-template-columns: 1fr;
            gap: 6px;
          }
          .slide-cierre h1 {
            font-size: 2.4rem;
          }
          .slide-cierre .frase-final {
            font-size: 1.2rem;
          }

          .card {
            padding: 20px 18px;
          }
          .card i {
            font-size: 2rem;
          }
          .card h3 {
            font-size: 1.1rem;
          }

          .nav-buttons {
            bottom: 180px;
            right: 16px;
          }
          .nav-btn {
            width: 40px;
            height: 40px;
            font-size: 1rem;
          }
          .progress-indicator {
            bottom: 18px;
            padding: 6px 12px;
            gap: 6px;
          }
          .progress-dot {
            width: 8px;
            height: 8px;
          }
          .progress-dot.active {
            width: 20px;
          }
          .btn-primary {
            padding: 12px 28px;
            font-size: 0.9rem;
            width: 100%;
            text-align: center;
          }
          .container {
            padding: 0 16px;
          }

          .slide-cierre .grid-2 {
            grid-template-columns: 1fr;
          }
          .slide-cierre .grid-3 {
            grid-template-columns: 1fr;
          }

          .slide-cierre div[style*="background: rgba(255,255,255,0.02)"] {
            padding: 20px !important;
          }
        }

        @media (max-width: 480px) {
          h1 {
            font-size: 1.8rem;
          }
          h2 {
            font-size: 1.5rem;
          }
          .slide {
            padding: 40px 0 120px;
          }
          .slide-cierre h1 {
            font-size: 2rem;
          }
          .nav-buttons {
            bottom: 160px;
            right: 10px;
          }
          .nav-btn {
            width: 36px;
            height: 36px;
            font-size: 0.9rem;
          }
          .card {
            padding: 16px 14px;
          }
          .card i {
            font-size: 1.6rem;
          }

          .badge {
            font-size: 0.65rem;
            padding: 4px 14px;
          }

          .slide-cierre div[style*="display: grid; grid-template-columns: 1fr 1fr"] {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </>
  );
}