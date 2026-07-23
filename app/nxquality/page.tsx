// app/nxquality/page.tsx
"use client";

import { useEffect, useState } from 'react';

export default function NXQualityPage() {
  return (
    <main style={{
      minHeight: '100vh',
      backgroundColor: '#0a0e14',
      marginTop: 0,
      paddingTop: 0,
    }}>
      <PresentationContent />
    </main>
  );
}

function PresentationContent() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 8;

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
      {/* ===== SLIDE 1: PORTADA ===== */}
      <section className="slide" id="slide-0">
        <div className="container slide-content">
          <div className="badge">
            <i className="fas fa-leaf"></i> NX Quality · Inteligencia Operacional
          </div>
          <h1>
            Cada fruta<br />tiene una <span className="gradient">historia</span>.
          </h1>
          <p style={{ fontSize: '1.4rem', color: '#aab7c9', maxWidth: '680px', margin: '20px 0 32px' }}>
            Nuestra misión es que <span className="highlight">nunca vuelva a perderse</span>.
          </p>
          <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
            <a href="#slide-1" className="btn-primary" onClick={(e) => { e.preventDefault(); goToSlide(1); }}>
              <i className="fas fa-arrow-right"></i> Explorar la plataforma
            </a>
            <span style={{ display: 'inline-flex', alignItems: 'center', color: '#6b7a8f', gap: '8px', fontSize: '0.9rem' }}>
              <i className="fas fa-chevron-down"></i> Desplaza o usa las flechas
            </span>
          </div>
          <div style={{ marginTop: '60px', paddingTop: '24px', borderTop: '1px solid rgba(255,255,255,0.04)', display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '10px', color: '#6b7a8f', fontSize: '0.8rem' }}>
            <span><i className="fas fa-lock"></i> Documento Estratégico · Confidencial</span>
            <span>Versión 0.1</span>
          </div>
        </div>
      </section>

      {/* ===== SLIDE 2: EL ORIGEN ===== */}
      <section className="slide" id="slide-1">
        <div className="container slide-content">
          <span className="badge"><i className="fas fa-exclamation-triangle"></i> El problema</span>
          <h2>El conocimiento se <span className="text-gradient">pierde</span></h2>
          <div className="grid-2">
            <div>
              <p style={{ fontSize: '1.1rem', color: '#c8d2df', marginBottom: '16px' }}>
                La industria alcanzó estándares mundiales, pero las decisiones más importantes
                aún dependen de información dispersa y la experiencia individual.
              </p>
              <ul className="benefit-list">
                <li><i className="fas fa-times-circle"></i> Planillas Excel</li>
                <li><i className="fas fa-times-circle"></i> Correos y WhatsApp</li>
                <li><i className="fas fa-times-circle"></i> Informes PDF</li>
                <li><i className="fas fa-times-circle"></i> Fotografías aisladas</li>
                <li><i className="fas fa-times-circle"></i> La memoria del inspector</li>
                <li><i className="fas fa-times-circle"></i> Llamadas telefónicas</li>
              </ul>
              <p style={{ color: '#aab7c9', fontStyle: 'italic', marginTop: '16px', borderLeft: '3px solid #2ecc71', paddingLeft: '16px' }}>
                "Cuando aparece un problema semanas después,<br />ya es imposible reconstruir la historia técnica."
              </p>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', background: 'rgba(255,255,255,0.02)', borderRadius: '24px', padding: '28px', border: '1px dashed rgba(46,204,113,0.15)' }}>
              <i className="fas fa-apple-alt" style={{ fontSize: '4rem', color: '#2ecc71', opacity: '0.5', marginBottom: '8px' }}></i>
              <h3 style={{ color: '#fff', fontSize: '1.6rem' }}>Misma fruta,</h3>
              <p style={{ fontSize: '1.2rem', color: '#aab7c9' }}>múltiples inspecciones, <span className="highlight">cero historia</span>.</p>
              <div style={{ marginTop: '20px', display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                <span style={{ background: '#141a21', padding: '4px 14px', borderRadius: '30px', fontSize: '0.75rem', border: '1px solid #2ecc71' }}>Precosecha</span>
                <span style={{ background: '#141a21', padding: '4px 14px', borderRadius: '30px', fontSize: '0.75rem', border: '1px solid #2ecc71' }}>Recepción</span>
                <span style={{ background: '#141a21', padding: '4px 14px', borderRadius: '30px', fontSize: '0.75rem', border: '1px solid #2ecc71' }}>Packing</span>
                <span style={{ background: '#141a21', padding: '4px 14px', borderRadius: '30px', fontSize: '0.75rem', border: '1px solid #2ecc71' }}>Despacho</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== SLIDE 3: LA OPORTUNIDAD ===== */}
      <section className="slide" id="slide-2">
        <div className="container slide-content">
          <span className="badge"><i className="fas fa-lightbulb"></i> La oportunidad</span>
          <h2>Transformar inspecciones en <span className="text-gradient">conocimiento</span></h2>
          <div className="grid-3">
            <div className="card">
              <i className="fas fa-history"></i>
              <h3>Historia Técnica</h3>
              <p>Cada inspección, foto y medición enriquece un expediente único que acompaña a la fruta desde su origen.</p>
            </div>
            <div className="card">
              <i className="fas fa-mobile-alt"></i>
              <h3>Inspector del Futuro</h3>
              <p>El móvil como herramienta principal. Protocolos guiados que estandarizan y reducen errores.</p>
            </div>
            <div className="card">
              <i className="fas fa-brain"></i>
              <h3>Inteligencia Colectiva</h3>
              <p>Aprende del comportamiento histórico de cada productor, variedad y temporada para detectar anomalías.</p>
            </div>
          </div>
          <div style={{ marginTop: '28px', background: 'rgba(46,204,113,0.05)', borderRadius: '20px', padding: '20px 28px', borderLeft: '6px solid #2ecc71' }}>
            <p style={{ fontSize: '1.1rem', color: '#d0d9e5' }}>
              <i className="fas fa-quote-left" style={{ color: '#2ecc71', marginRight: '10px' }}></i>
              No queremos desarrollar un software. Queremos construir el <strong>nuevo estándar de gestión de calidad</strong> para la fruta de exportación.
            </p>
          </div>
        </div>
      </section>

      {/* ===== SLIDE 4: IDENTIDAD DE LA FRUTA ===== */}
      <section className="slide" id="slide-3">
        <div className="container slide-content">
          <span className="badge"><i className="fas fa-fingerprint"></i> El concepto clave</span>
          <h2>La <span className="text-gradient">identidad</span> de la fruta</h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '32px' }}>
            <div style={{ flex: '1', minWidth: '250px' }}>
              <p style={{ fontSize: '1.1rem', color: '#c8d2df' }}>Mientras los sistemas usan números de lote, nosotros partimos de la <span className="highlight">identidad técnica</span>:</p>
              <ul className="benefit-list">
                <li><i className="fas fa-check-circle"></i> Productor</li>
                <li><i className="fas fa-check-circle"></i> Especie</li>
                <li><i className="fas fa-check-circle"></i> Variedad</li>
                <li><i className="fas fa-check-circle"></i> Fecha y bloque de cosecha</li>
              </ul>
              <p style={{ color: '#aab7c9', marginTop: '12px', fontSize: '1.05rem' }}>
                <i className="fas fa-arrow-right" style={{ color: '#2ecc71' }}></i>
                Lotes, pallets y mercados cambian.<br />
                <span className="highlight">La identidad de la fruta, no.</span>
              </p>
            </div>
            <div style={{ flex: '1', minWidth: '250px', background: '#0f151c', borderRadius: '24px', padding: '28px', border: '1px solid #1f2a33' }}>
              <i className="fas fa-tree" style={{ fontSize: '2.5rem', color: '#2ecc71' }}></i>
              <h4 style={{ color: '#fff', margin: '10px 0 4px' }}>Historia Técnica en acción</h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', fontSize: '0.9rem', color: '#aab7c9' }}>
                <span><span style={{ color: '#fff' }}>Productor:</span> Agrícola Los Andes</span>
                <span><span style={{ color: '#fff' }}>Variedad:</span> Hass</span>
                <span><span style={{ color: '#fff' }}>Cosecha:</span> 15-01-2026 · Bloque A</span>
                <span style={{ borderTop: '1px solid #1f2a33', paddingTop: '10px', marginTop: '8px' }}>
                  <i className="fas fa-clipboard-list" style={{ color: '#2ecc71' }}></i>
                  12 eventos técnicos registrados
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== SLIDE 5: RECORRIDO ===== */}
      <section className="slide" id="slide-4">
        <div className="container slide-content">
          <span className="badge"><i className="fas fa-route"></i> El recorrido</span>
          <h2>La historia <span className="text-gradient">crece</span> en cada etapa</h2>

          <div className="journey">
            <div className="journey-steps">
              <div className="journey-step">
                <i className="fas fa-seedling"></i>
                <span>Productor</span>
              </div>
              <div className="journey-step">
                <i className="fas fa-sun"></i>
                <span>Cosecha</span>
              </div>
              <div className="journey-step">
                <i className="fas fa-warehouse"></i>
                <span>Recepción</span>
              </div>
              <div className="journey-step">
                <i className="fas fa-snowflake"></i>
                <span>Frigorífico</span>
              </div>
              <div className="journey-step">
                <i className="fas fa-boxes"></i>
                <span>Packing</span>
              </div>
              <div className="journey-step">
                <i className="fas fa-box"></i>
                <span>Prod. Term.</span>
              </div>
              <div className="journey-step">
                <i className="fas fa-truck"></i>
                <span>Pre Despacho</span>
              </div>
              <div className="journey-step">
                <i className="fas fa-user-check"></i>
                <span>Cliente</span>
              </div>
            </div>

            <div className="journey-legend">
              <i className="fas fa-arrow-right"></i>
              La información <span className="highlight">nunca comienza nuevamente</span>
              <i className="fas fa-arrow-left"></i>
              <br />
              <span style={{ fontSize: '0.9rem', color: '#6b7a8f' }}>Cada etapa agrega conocimiento · Cada paso construye evidencia</span>
            </div>
          </div>
        </div>
      </section>

      {/* ===== SLIDE 6: EVENTOS TÉCNICOS ===== */}
      <section className="slide" id="slide-5">
        <div className="container slide-content">
          <span className="badge"><i className="fas fa-cubes"></i> Nuevo paradigma</span>
          <h2>No registramos inspecciones.<br />Registramos <span className="text-gradient">Eventos Técnicos</span></h2>
          <div className="grid-3">
            <div className="card"><i className="fas fa-clipboard-check"></i><h3>Inspección</h3><p>Un evento clave en la historia de la fruta.</p></div>
            <div className="card"><i className="fas fa-camera"></i><h3>Evidencia visual</h3><p>Cada fotografía agrega respaldo objetivo.</p></div>
            <div className="card"><i className="fas fa-chart-line"></i><h3>Medición</h3><p>Datos que enriquecen el contexto.</p></div>
            <div className="card"><i className="fas fa-exchange-alt"></i><h3>Cambio de mercado</h3><p>Nuevo destino, misma identidad.</p></div>
            <div className="card"><i className="fas fa-sync-alt"></i><h3>Reproceso</h3><p>Decisiones operacionales registradas.</p></div>
            <div className="card"><i className="fas fa-bell"></i><h3>Alerta</h3><p>Notificaciones inteligentes sobre anomalías.</p></div>
          </div>
        </div>
      </section>

      {/* ===== SLIDE 7: BENEFICIOS ===== */}
      <section className="slide" id="slide-6">
        <div className="container slide-content">
          <span className="badge"><i className="fas fa-medal"></i> El verdadero diferencial</span>
          <h2>Más que información: <span className="text-gradient">inteligencia operacional</span></h2>
          <div className="grid-2">
            <div>
              <ul className="benefit-list">
                <li><i className="fas fa-check-circle"></i> Mayor trazabilidad</li>
                <li><i className="fas fa-check-circle"></i> Respaldo técnico completo</li>
                <li><i className="fas fa-check-circle"></i> Protocolos estandarizados</li>
                <li><i className="fas fa-check-circle"></i> Auditoría en tiempo real</li>
                <li><i className="fas fa-check-circle"></i> Menos información perdida</li>
                <li><i className="fas fa-check-circle"></i> Conocimiento acumulado temporada a temporada</li>
              </ul>
            </div>
            <div style={{ background: '#0f151c', borderRadius: '20px', padding: '28px', border: '1px solid rgba(46,204,113,0.2)' }}>
              <i className="fas fa-robot" style={{ fontSize: '2.5rem', color: '#2ecc71' }}></i>
              <h4 style={{ color: '#fff', margin: '10px 0' }}>Aprendizaje colectivo</h4>
              <p style={{ color: '#aab7c9' }}>El sistema detectará patrones como:</p>
              <ul style={{ listStyle: 'none', marginTop: '12px', color: '#c8d2df' }}>
                <li style={{ marginBottom: '8px' }}><i className="fas fa-arrow-right" style={{ color: '#2ecc71' }}></i> "Esta variedad normalmente presenta un comportamiento distinto."</li>
                <li><i className="fas fa-arrow-right" style={{ color: '#2ecc71' }}></i> "Este productor nunca había mostrado este nivel de daño."</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ===== SLIDE 8: CIERRE ===== */}
      <section className="slide" id="slide-7">
        <div className="container slide-content slide-cierre">
          <span className="badge"><i className="fas fa-handshake"></i> Programa Fundador</span>
          <h2 style={{ fontSize: '2.8rem' }}>No buscamos clientes.<br />Buscamos <span className="text-gradient">protagonistas</span>.</h2>

          <div style={{ maxWidth: '720px', margin: '24px auto', background: '#0f151c', padding: '32px', borderRadius: '28px', border: '1px solid #1f2a33' }}>
            <p style={{ color: '#c8d2df', fontSize: '1.05rem', marginBottom: '12px' }}>Empresas fundadoras tendrán:</p>
            <ul style={{ listStyle: 'none', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px 24px', textAlign: 'left', color: '#aab7c9', fontSize: '0.95rem' }}>
              <li><i className="fas fa-check-circle" style={{ color: '#2ecc71' }}></i> Diseño funcional directo</li>
              <li><i className="fas fa-check-circle" style={{ color: '#2ecc71' }}></i> Acceso anticipado</li>
              <li><i className="fas fa-check-circle" style={{ color: '#2ecc71' }}></i> Prioridad en nuevas funcionalidades</li>
              <li><i className="fas fa-check-circle" style={{ color: '#2ecc71' }}></i> Condiciones comerciales preferentes</li>
              <li><i className="fas fa-check-circle" style={{ color: '#2ecc71' }}></i> Soporte directo durante el desarrollo</li>
              <li><i className="fas fa-check-circle" style={{ color: '#2ecc71' }}></i> Influencia real sobre el roadmap</li>
            </ul>
            <p style={{ color: '#c8d2df', fontSize: '0.95rem', marginTop: '16px', borderTop: '1px solid #1f2a33', paddingTop: '16px' }}>
              <i className="fas fa-quote-left" style={{ color: '#2ecc71', opacity: '0.5' }}></i>
              Construyamos juntos la plataforma que la industria realmente necesita.
            </p>
          </div>

          <div style={{ margin: '28px 0 20px', display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="#" className="btn-primary" style={{ fontSize: '1.1rem', padding: '16px 48px' }}>
              <i className="fas fa-star"></i> Quiero ser protagonista
            </a>
          </div>

          <hr style={{ border: '0.5px solid #1f2a33', margin: '32px 0 28px' }} />

          <h1 style={{ fontSize: '3.6rem' }}>Cada fruta tiene una historia.</h1>
          <p className="frase-final">
            <i className="fas fa-circle"></i>
            Nuestra misión es que nunca vuelva a perderse
            <i className="fas fa-circle"></i>
          </p>

          <div style={{ marginTop: '28px', color: '#6b7a8f', display: 'flex', justifyContent: 'center', gap: '32px', flexWrap: 'wrap', fontSize: '0.85rem' }}>
            <span><i className="fas fa-lock"></i> Confidencial</span>
            <span>NX Quality · Versión 0.1</span>
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
          font-size: 3rem;
          font-weight: 700;
          letter-spacing: -0.02em;
          line-height: 1.2;
          margin-bottom: 1.2rem;
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

        /* ===== SLIDES ===== */
        .slide {
          min-height: 100vh;
          display: flex;
          align-items: center;
          padding: 60px 0 80px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.04);
          position: relative;
        }
        .slide:last-of-type {
          border-bottom: none;
        }

        .slide-content {
          width: 100%;
        }

        /* ===== TARJETAS ===== */
        .grid-2 {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 32px;
          margin-top: 28px;
        }
        .grid-3 {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 28px;
          margin-top: 28px;
        }

        .card {
          background: rgba(255, 255, 255, 0.03);
          backdrop-filter: blur(4px);
          border: 1px solid rgba(255, 255, 255, 0.06);
          padding: 32px 26px;
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
          font-size: 2.8rem;
          color: #2ecc71;
          margin-bottom: 18px;
          display: inline-block;
        }
        .card h3 {
          font-size: 1.4rem;
          color: #fff;
          margin-bottom: 8px;
        }
        .card p {
          color: #aab7c9;
          font-size: 0.95rem;
        }

        /* ===== BENEFICIOS LISTA ===== */
        .benefit-list {
          list-style: none;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 10px 30px;
          margin: 20px 0;
        }
        .benefit-list li {
          display: flex;
          align-items: center;
          gap: 12px;
          color: #d0d9e5;
        }
        .benefit-list li i {
          color: #2ecc71;
          font-size: 1.1rem;
          width: 22px;
        }

        /* ===== TIMELINE — RECORRIDO ===== */
        .journey {
          background: rgba(255, 255, 255, 0.02);
          border-radius: 28px;
          padding: 40px 30px;
          border: 1px solid rgba(46, 204, 113, 0.1);
          margin-top: 10px;
          position: relative;
          overflow: hidden;
        }
        .journey::before {
          content: '';
          position: absolute;
          top: 50%;
          left: 6%;
          right: 6%;
          height: 3px;
          background: linear-gradient(90deg, #2ecc71, #3498db, #2ecc71);
          transform: translateY(-50%);
          opacity: 0.3;
          z-index: 0;
        }

        .journey-steps {
          display: flex;
          justify-content: space-between;
          align-items: center;
          position: relative;
          z-index: 1;
          flex-wrap: wrap;
          gap: 12px 6px;
        }

        .journey-step {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 6px;
          background: #0a0e14;
          padding: 12px 16px;
          border-radius: 60px;
          border: 1px solid rgba(46, 204, 113, 0.25);
          min-width: 70px;
          transition: all 0.3s ease;
          box-shadow: 0 4px 16px rgba(0, 0, 0, 0.5);
        }
        .journey-step:hover {
          border-color: #2ecc71;
          transform: scale(1.05);
          box-shadow: 0 8px 28px rgba(46, 204, 113, 0.2);
        }
        .journey-step i {
          font-size: 1.6rem;
          color: #2ecc71;
        }
        .journey-step span {
          font-size: 0.7rem;
          font-weight: 600;
          color: #aab7c9;
          text-align: center;
          letter-spacing: 0.3px;
        }

        .journey-legend {
          text-align: center;
          margin-top: 24px;
          color: #aab7c9;
          font-size: 1rem;
        }
        .journey-legend i {
          color: #2ecc71;
          margin: 0 6px;
        }
        .journey-legend .highlight {
          font-weight: 700;
        }

        /* ===== SECCIÓN CIERRE ===== */
        .slide-cierre {
          text-align: center;
        }
        .slide-cierre h1 {
          font-size: 4.6rem;
        }
        .slide-cierre .frase-final {
          font-size: 1.8rem;
          color: #aab7c9;
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

        /* ===== RESPONSIVE ===== */
        @media (max-width: 1024px) {
          h1 {
            font-size: 3.2rem;
          }
          h2 {
            font-size: 2.4rem;
          }
          .grid-3 {
            grid-template-columns: repeat(2, 1fr);
          }
          .journey-steps {
            justify-content: center;
          }
          .journey-step {
            padding: 10px 14px;
            min-width: 60px;
          }
          .journey-step i {
            font-size: 1.3rem;
          }
          .journey-step span {
            font-size: 0.65rem;
          }
        }

        @media (max-width: 768px) {
          h1 {
            font-size: 2.4rem;
          }
          h2 {
            font-size: 2rem;
            line-height: 1.3;
          }
          .grid-2 {
            grid-template-columns: 1fr;
          }
          .grid-3 {
            grid-template-columns: 1fr;
          }
          .benefit-list {
            grid-template-columns: 1fr;
          }
          .slide {
            padding: 40px 0 60px;
            min-height: auto;
          }
          .journey {
            padding: 24px 16px;
            border-radius: 20px;
          }
          .journey::before {
            display: none;
          }
          .journey-steps {
            flex-wrap: wrap;
            justify-content: center;
            gap: 8px;
          }
          .journey-step {
            flex-direction: row;
            gap: 8px;
            padding: 8px 14px;
            min-width: auto;
            border-radius: 40px;
          }
          .journey-step i {
            font-size: 1rem;
          }
          .journey-step span {
            font-size: 0.6rem;
          }
          .slide-cierre h1 {
            font-size: 2.8rem;
          }
          .slide-cierre .frase-final {
            font-size: 1.2rem;
          }
          .nav-buttons {
            bottom: 200px;
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
        }

        @media (max-width: 480px) {
          h1 {
            font-size: 1.8rem;
          }
          h2 {
            font-size: 1.5rem;
          }
          .card {
            padding: 20px 16px;
          }
          .card i {
            font-size: 2rem;
          }
          .slide-cierre h1 {
            font-size: 2.2rem;
          }
          .journey-step {
            padding: 6px 10px;
          }
          .journey-step i {
            font-size: 0.9rem;
          }
          .journey-step span {
            font-size: 0.55rem;
          }
          .nav-buttons {
            bottom: 200px;
            right: 10px;
          }
          .nav-btn {
            width: 36px;
            height: 36px;
            font-size: 0.9rem;
          }
        }
      `}</style>
    </>
  );
}