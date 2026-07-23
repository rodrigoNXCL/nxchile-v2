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
  const totalSlides = 10; // 10 diapositivas

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
      {/* ===== SLIDE 1: LA CALIDAD DECIDE EL DESTINO ===== */}
      <section className="slide" id="slide-0">
        <div className="container slide-content">
          <div className="badge">
            <i className="fas fa-leaf"></i> NX Quality · Inteligencia Operacional
          </div>
          <h1>
            La calidad<br />decide el <span className="gradient">destino</span> de la fruta
          </h1>
          <p style={{ fontSize: '1.4rem', color: '#aab7c9', maxWidth: '720px', margin: '20px 0 32px' }}>
            Cada temporada se toman miles de decisiones que determinan el destino comercial de millones de kilos de fruta.
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
            <span><i className="fas fa-lock"></i> Documento Estratégico · Versión Fundacional</span>
            <span>NX Quality</span>
          </div>
        </div>
      </section>

      {/* ===== SLIDE 2: EL VERDADERO PROBLEMA ===== */}
      <section className="slide" id="slide-1">
        <div className="container slide-content">
          <span className="badge"><i className="fas fa-exclamation-triangle"></i> El verdadero problema</span>
          <h2>El problema <span className="text-gradient">no es la calidad</span></h2>
          <p style={{ fontSize: '1.2rem', color: '#c8d2df', marginBottom: '20px' }}>
            El problema es la <span className="highlight">pérdida del conocimiento</span>.
          </p>
          <div className="grid-2">
            <div>
              <p style={{ color: '#aab7c9', marginBottom: '16px' }}>
                Cada revisión genera datos. Cada fotografía genera evidencia. Cada inspector aporta experiencia.
                Pero esa información termina distribuida entre múltiples medios.
              </p>
              <ul className="benefit-list">
                <li><i className="fas fa-times-circle"></i> Excel</li>
                <li><i className="fas fa-times-circle"></i> WhatsApp</li>
                <li><i className="fas fa-times-circle"></i> PDF</li>
                <li><i className="fas fa-times-circle"></i> Correos</li>
                <li><i className="fas fa-times-circle"></i> Fotografías</li>
                <li><i className="fas fa-times-circle"></i> Memoria de las personas</li>
              </ul>
              <p style={{ color: '#aab7c9', fontStyle: 'italic', marginTop: '16px', borderLeft: '3px solid #2ecc71', paddingLeft: '16px' }}>
                "Cuando aparece un reclamo, una auditoría o un rechazo,<br />reconstruir la historia es lento, difícil y muchas veces imposible."
              </p>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', background: 'rgba(255,255,255,0.02)', borderRadius: '24px', padding: '28px', border: '1px dashed rgba(46,204,113,0.15)' }}>
              <i className="fas fa-database" style={{ fontSize: '4rem', color: '#2ecc71', opacity: '0.5', marginBottom: '8px' }}></i>
              <h3 style={{ color: '#fff', fontSize: '1.6rem' }}>Información dispersa,</h3>
              <p style={{ fontSize: '1.2rem', color: '#aab7c9' }}>conocimiento <span className="highlight">perdido</span>.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== SLIDE 3: ¿POR QUÉ AHORA? ===== */}
      <section className="slide" id="slide-2">
        <div className="container slide-content">
          <span className="badge"><i className="fas fa-clock"></i> ¿Por qué ahora?</span>
          <h2>La información dejó de ser un respaldo.<br />Hoy es un <span className="text-gradient">activo estratégico</span>.</h2>
          <div className="grid-3">
            <div className="card">
              <i className="fas fa-globe-americas"></i>
              <h3>Mercados más exigentes</h3>
              <p>Cada vez más挑剔 y con estándares más altos de calidad y trazabilidad.</p>
            </div>
            <div className="card">
              <i className="fas fa-search"></i>
              <h3>Auditorías permanentes</h3>
              <p>La fiscalización ya no es ocasional, es parte de la operación diaria.</p>
            </div>
            <div className="card">
              <i className="fas fa-chart-line"></i>
              <h3>Decisiones más rápidas</h3>
              <p>Menores márgenes exigen respuestas ágiles basadas en datos confiables.</p>
            </div>
            <div className="card">
              <i className="fas fa-trophy"></i>
              <h3>Más competencia</h3>
              <p>El mercado global exige diferenciación y excelencia operacional.</p>
            </div>
            <div className="card">
              <i className="fas fa-link"></i>
              <h3>Trazabilidad total</h3>
              <p>Los clientes finales exigen conocer el origen y recorrido de cada fruta.</p>
            </div>
            <div className="card">
              <i className="fas fa-coins"></i>
              <h3>Menores márgenes</h3>
              <p>Cada decisión errónea tiene un impacto económico inmediato y medible.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== SLIDE 4: NUESTRA VISIÓN ===== */}
      <section className="slide" id="slide-3">
        <div className="container slide-content">
          <span className="badge"><i className="fas fa-eye"></i> Nuestra visión</span>
          <h2>El nuevo <span className="text-gradient">estándar</span> para la gestión de calidad</h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '40px', marginTop: '20px' }}>
            <div style={{ flex: '1', minWidth: '280px' }}>
              <p style={{ fontSize: '1.2rem', color: '#c8d2df' }}>
                No queremos desarrollar otro software de inspecciones.
              </p>
              <p style={{ fontSize: '1.2rem', color: '#aab7c9', marginTop: '12px' }}>
                Queremos construir el <span className="highlight">nuevo estándar</span> para la gestión de calidad de la fruta de exportación.
              </p>
              <div style={{ marginTop: '24px', background: 'rgba(46,204,113,0.05)', borderRadius: '16px', padding: '20px 24px', borderLeft: '4px solid #2ecc71' }}>
                <p style={{ color: '#d0d9e5', fontSize: '1.05rem' }}>
                  <i className="fas fa-quote-left" style={{ color: '#2ecc71', marginRight: '10px' }}></i>
                  Cada fruta debe conservar su <span className="highlight">memoria técnica</span> durante toda su vida operacional.
                </p>
              </div>
            </div>
            <div style={{ flex: '1', minWidth: '250px', background: '#0f151c', borderRadius: '24px', padding: '32px', border: '1px solid #1f2a33', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
              <i className="fas fa-flag-checkered" style={{ fontSize: '3.5rem', color: '#2ecc71', marginBottom: '16px' }}></i>
              <p style={{ color: '#aab7c9', textAlign: 'center', fontSize: '0.95rem' }}>
                Un estándar construido<br /><span className="highlight">desde la industria</span><br />para la industria.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== SLIDE 5: ¿QUÉ ES NX QUALITY? ===== */}
      <section className="slide" id="slide-4">
        <div className="container slide-content">
          <span className="badge"><i className="fas fa-cube"></i> ¿Qué es NX Quality?</span>
          <h2>Una <span className="text-gradient">Plataforma de Inteligencia Operacional</span></h2>
          <p style={{ fontSize: '1.15rem', color: '#aab7c9', maxWidth: '700px', marginBottom: '28px' }}>
            No administra formularios. Construye una <span className="highlight">Historia Técnica</span> que acompaña a la fruta desde el huerto hasta el destino final.
          </p>
          <div className="grid-3">
            <div className="card">
              <i className="fas fa-history"></i>
              <h3>Historia Técnica</h3>
              <p>Cada evento agrega conocimiento. Cada decisión queda respaldada.</p>
            </div>
            <div className="card">
              <i className="fas fa-mobile-alt"></i>
              <h3>Inspector del Futuro</h3>
              <p>Protocolos guiados que estandarizan y reducen errores operacionales.</p>
            </div>
            <div className="card">
              <i className="fas fa-brain"></i>
              <h3>Conocimiento Colectivo</h3>
              <p>Aprende del comportamiento histórico de cada productor, variedad y temporada.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== SLIDE 6: UN NUEVO CONCEPTO DE TRAZABILIDAD ===== */}
      <section className="slide" id="slide-5">
        <div className="container slide-content">
          <span className="badge"><i className="fas fa-fingerprint"></i> Un nuevo concepto de trazabilidad</span>
          <h2>Seguimos la <span className="text-gradient">identidad real</span> de la fruta</h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '32px' }}>
            <div style={{ flex: '1', minWidth: '250px' }}>
              <p style={{ fontSize: '1.1rem', color: '#c8d2df' }}>
                La mayoría de los sistemas sigue al lote.
              </p>
              <p style={{ fontSize: '1.1rem', color: '#aab7c9', marginTop: '8px' }}>
                Nosotros seguimos la <span className="highlight">identidad real</span> de la fruta.
              </p>
              <ul className="benefit-list" style={{ marginTop: '16px' }}>
                <li><i className="fas fa-check-circle"></i> Productor</li>
                <li><i className="fas fa-check-circle"></i> Especie</li>
                <li><i className="fas fa-check-circle"></i> Variedad</li>
                <li><i className="fas fa-check-circle"></i> Fecha de cosecha</li>
                <li><i className="fas fa-check-circle"></i> Hora o bloque horario</li>
              </ul>
              <p style={{ color: '#aab7c9', marginTop: '12px', fontSize: '1.05rem' }}>
                <i className="fas fa-arrow-right" style={{ color: '#2ecc71' }}></i>
                Los lotes cambian.<br />
                <span className="highlight">La identidad permanece.</span>
              </p>
            </div>
            <div style={{ flex: '1', minWidth: '250px', background: '#0f151c', borderRadius: '24px', padding: '28px', border: '1px solid #1f2a33' }}>
              <i className="fas fa-tree" style={{ fontSize: '2.5rem', color: '#2ecc71' }}></i>
              <h4 style={{ color: '#fff', margin: '10px 0 4px' }}>Identidad Técnica</h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', fontSize: '0.9rem', color: '#aab7c9' }}>
                <span><span style={{ color: '#fff' }}>Productor:</span> Agrícola Los Andes</span>
                <span><span style={{ color: '#fff' }}>Especie:</span> Palta</span>
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

      {/* ===== SLIDE 7: ¿CUÁNTO CUESTA UNA MALA DECISIÓN? ===== */}
      <section className="slide" id="slide-6">
        <div className="container slide-content">
          <span className="badge"><i className="fas fa-calculator"></i> El costo de la desinformación</span>
          <h2>¿Cuánto cuesta una <span className="text-gradient">mala decisión</span>?</h2>
          <div className="grid-3">
            <div className="card" style={{ borderColor: 'rgba(231, 76, 60, 0.2)' }}>
              <i className="fas fa-box" style={{ color: '#e74c3c' }}></i>
              <h3 style={{ color: '#e74c3c' }}>Contenedor rechazado</h3>
              <p>Pérdida total del valor de la fruta más costos logísticos y comerciales.</p>
            </div>
            <div className="card" style={{ borderColor: 'rgba(241, 196, 15, 0.2)' }}>
              <i className="fas fa-clock" style={{ color: '#f1c40f' }}></i>
              <h3 style={{ color: '#f1c40f' }}>Cambio de mercado tardío</h3>
              <p>Oportunidades perdidas por no contar con información a tiempo.</p>
            </div>
            <div className="card" style={{ borderColor: 'rgba(52, 152, 219, 0.2)' }}>
              <i className="fas fa-file-alt" style={{ color: '#3498db' }}></i>
              <h3 style={{ color: '#3498db' }}>Reclamo sin respaldo</h3>
              <p>Imposibilidad de defender la posición técnica ante el cliente.</p>
            </div>
            <div className="card" style={{ borderColor: 'rgba(155, 89, 182, 0.2)' }}>
              <i className="fas fa-search" style={{ color: '#9b59b6' }}></i>
              <h3 style={{ color: '#9b59b6' }}>Horas buscando antecedentes</h3>
              <p>Tiempo improductivo que podría dedicarse a análisis y mejora.</p>
            </div>
            <div className="card" style={{ borderColor: 'rgba(230, 126, 34, 0.2)' }}>
              <i className="fas fa-users" style={{ color: '#e67e22' }}></i>
              <h3 style={{ color: '#e67e22' }}>Productores cuestionando</h3>
              <p>Falta de evidencia objetiva para respaldar las decisiones técnicas.</p>
            </div>
            <div className="card" style={{ borderColor: 'rgba(26, 188, 156, 0.2)' }}>
              <i className="fas fa-user-tie" style={{ color: '#1abc9c' }}></i>
              <h3 style={{ color: '#1abc9c' }}>Decisiones sin datos</h3>
              <p>Dependencia exclusiva de la experiencia sin respaldo objetivo.</p>
            </div>
          </div>
          <div style={{ marginTop: '24px', background: 'rgba(46,204,113,0.05)', borderRadius: '16px', padding: '16px 24px', textAlign: 'center', border: '1px solid rgba(46,204,113,0.1)' }}>
            <p style={{ color: '#d0d9e5', fontSize: '1.05rem' }}>
              <i className="fas fa-arrow-right" style={{ color: '#2ecc71' }}></i>
              NX Quality <span className="highlight">no reemplaza el criterio técnico</span>.
              Entrega la <span className="highlight">mejor información posible</span> para decidir.
            </p>
          </div>
        </div>
      </section>

      {/* ===== SLIDE 8: ¿QUÉ HACE DIFERENTE A NX QUALITY? ===== */}
      <section className="slide" id="slide-7">
        <div className="container slide-content">
          <span className="badge"><i className="fas fa-star"></i> El verdadero diferencial</span>
          <h2>¿Qué hace diferente a <span className="text-gradient">NX Quality</span>?</h2>
          <div className="grid-2">
            <div>
              <ul className="benefit-list" style={{ gridTemplateColumns: '1fr' }}>
                <li><i className="fas fa-check-circle"></i> Historia Técnica única por cada fruta</li>
                <li><i className="fas fa-check-circle"></i> Protocolos de inspección estandarizados</li>
                <li><i className="fas fa-check-circle"></i> Evidencia fotográfica integrada</li>
                <li><i className="fas fa-check-circle"></i> Separación entre información técnica y comercial</li>
                <li><i className="fas fa-check-circle"></i> Trazabilidad completa desde el origen</li>
                <li><i className="fas fa-check-circle"></i> Conocimiento acumulado temporada tras temporada</li>
              </ul>
            </div>
            <div style={{ background: '#0f151c', borderRadius: '20px', padding: '28px', border: '1px solid rgba(46,204,113,0.2)' }}>
              <i className="fas fa-rocket" style={{ fontSize: '2.5rem', color: '#2ecc71' }}></i>
              <h4 style={{ color: '#fff', margin: '10px 0' }}>El poder de la información</h4>
              <p style={{ color: '#aab7c9' }}>
                Cada temporada, la plataforma aprende y mejora.
              </p>
              <ul style={{ listStyle: 'none', marginTop: '12px', color: '#c8d2df' }}>
                <li style={{ marginBottom: '8px' }}>
                  <i className="fas fa-arrow-right" style={{ color: '#2ecc71' }}></i>
                  Compara comportamientos históricos
                </li>
                <li style={{ marginBottom: '8px' }}>
                  <i className="fas fa-arrow-right" style={{ color: '#2ecc71' }}></i>
                  Detecta anomalías en tiempo real
                </li>
                <li>
                  <i className="fas fa-arrow-right" style={{ color: '#2ecc71' }}></i>
                  Construye conocimiento colectivo
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ===== SLIDE 9: PROGRAM FOUNDING PARTNERS ===== */}
      <section className="slide" id="slide-8">
        <div className="container slide-content">
          <span className="badge"><i className="fas fa-handshake"></i> Programa Founding Partners</span>
          <h2>Construyamos el estándar <span className="text-gradient">juntos</span></h2>
          <p style={{ fontSize: '1.15rem', color: '#aab7c9', maxWidth: '680px', marginBottom: '24px' }}>
            Buscamos un grupo muy reducido de empresas que quieran construir este estándar junto a nosotros.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '30px' }}>
            <div style={{ flex: '1', minWidth: '280px', background: 'rgba(255,255,255,0.02)', borderRadius: '20px', padding: '28px', border: '1px solid rgba(255,255,255,0.06)' }}>
              <h4 style={{ color: '#2ecc71', marginBottom: '12px' }}>
                <i className="fas fa-arrow-right"></i> ¿Qué esperamos?
              </h4>
              <ul style={{ listStyle: 'none', color: '#aab7c9' }}>
                <li style={{ marginBottom: '8px' }}><i className="fas fa-check" style={{ color: '#2ecc71', marginRight: '10px' }}></i> Acceso a procesos reales</li>
                <li style={{ marginBottom: '8px' }}><i className="fas fa-check" style={{ color: '#2ecc71', marginRight: '10px' }}></i> Validación funcional</li>
                <li style={{ marginBottom: '8px' }}><i className="fas fa-check" style={{ color: '#2ecc71', marginRight: '10px' }}></i> Retroalimentación permanente</li>
                <li style={{ marginBottom: '8px' }}><i className="fas fa-check" style={{ color: '#2ecc71', marginRight: '10px' }}></i> Casos reales</li>
                <li><i className="fas fa-check" style={{ color: '#2ecc71', marginRight: '10px' }}></i> Participación del equipo técnico</li>
              </ul>
            </div>
            <div style={{ flex: '1', minWidth: '280px', background: 'rgba(46,204,113,0.05)', borderRadius: '20px', padding: '28px', border: '1px solid rgba(46,204,113,0.15)' }}>
              <h4 style={{ color: '#2ecc71', marginBottom: '12px' }}>
                <i className="fas fa-gift"></i> ¿Qué reciben?
              </h4>
              <ul style={{ listStyle: 'none', color: '#c8d2df' }}>
                <li style={{ marginBottom: '8px' }}><i className="fas fa-check-circle" style={{ color: '#2ecc71', marginRight: '10px' }}></i> Participación directa en el diseño</li>
                <li style={{ marginBottom: '8px' }}><i className="fas fa-check-circle" style={{ color: '#2ecc71', marginRight: '10px' }}></i> Prioridad permanente</li>
                <li style={{ marginBottom: '8px' }}><i className="fas fa-check-circle" style={{ color: '#2ecc71', marginRight: '10px' }}></i> Implementación anticipada</li>
                <li style={{ marginBottom: '8px' }}><i className="fas fa-check-circle" style={{ color: '#2ecc71', marginRight: '10px' }}></i> Condiciones comerciales preferenciales</li>
                <li style={{ marginBottom: '8px' }}><i className="fas fa-check-circle" style={{ color: '#2ecc71', marginRight: '10px' }}></i> Soporte directo</li>
                <li><i className="fas fa-check-circle" style={{ color: '#2ecc71', marginRight: '10px' }}></i> Influencia sobre el roadmap</li>
              </ul>
            </div>
          </div>
          <div style={{ marginTop: '24px', textAlign: 'center' }}>
            <p style={{ color: '#aab7c9', fontSize: '1.05rem' }}>
              <i className="fas fa-quote-left" style={{ color: '#2ecc71', opacity: '0.5' }}></i>
              No buscamos clientes. Buscamos <span className="highlight">construir el producto junto a la industria</span>.
            </p>
          </div>
        </div>
      </section>

      {/* ===== SLIDE 10: CIERRE ===== */}
      <section className="slide" id="slide-9">
        <div className="container slide-content slide-cierre">
          <span className="badge"><i className="fas fa-rocket"></i> NX Quality</span>

          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '32px' }}>
              <p style={{ fontSize: '1.8rem', color: '#e8edf2', fontWeight: '300' }}>
                La calidad <span className="highlight">genera</span> información.
              </p>
              <p style={{ fontSize: '1.8rem', color: '#e8edf2', fontWeight: '300' }}>
                La información <span className="highlight">genera</span> conocimiento.
              </p>
              <p style={{ fontSize: '1.8rem', color: '#e8edf2', fontWeight: '300' }}>
                El conocimiento <span className="highlight">genera</span> mejores decisiones.
              </p>
            </div>

            <div style={{ background: 'rgba(46,204,113,0.05)', borderRadius: '20px', padding: '28px', border: '1px solid rgba(46,204,113,0.1)', marginBottom: '32px' }}>
              <p style={{ fontSize: '1.2rem', color: '#d0d9e5' }}>
                <i className="fas fa-quote-left" style={{ color: '#2ecc71', marginRight: '10px' }}></i>
                No venimos a vender un software.
              </p>
              <p style={{ fontSize: '1.2rem', color: '#d0d9e5' }}>
                Venimos a construir, junto a la industria, la <span className="highlight">próxima generación</span> de la gestión de calidad de la fruta de exportación.
              </p>
            </div>

            <div style={{ display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <a href="#" className="btn-primary" style={{ fontSize: '1.1rem', padding: '16px 48px' }}>
                <i className="fas fa-star"></i> Quiero ser Founding Partner
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

          <div style={{ marginTop: '28px', color: '#6b7a8f', display: 'flex', justifyContent: 'center', gap: '32px', flexWrap: 'wrap', fontSize: '0.85rem' }}>
            <span><i className="fas fa-lock"></i> Confidencial</span>
            <span>NX Quality · Versión Fundacional</span>
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