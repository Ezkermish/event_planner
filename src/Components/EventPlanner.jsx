import React from 'react';
import './EventPlanner.css'; // Import CSS file for styling

const EventPlanner = () => {
    return (
        <div className="event-planner-container">
            <header>
                <h1>Bienvenido a Event Planner</h1>
            </header>
            <section className="description">
                <p>Planifica y organiza tus eventos académicos sin
                    esfuerzo con Event Planner. Desde conferencias,
                    congresos, capacitaciones virtuales o presenciales,
                    te tenemos cubierto.
                </p>
                <button className="get-started-button">Comenzar</button>
            </section>

            <section className="events_categories">
                {/* Eventos académicos */}
                <ul>
                    <h2>Eventos Académicos:</h2>
                    <li>Ceremonias</li>
                    <li>Conferencias</li>
                    <li>Cursos</li>
                    <li>Diplomados</li>
                    <li>Coloquios</li>
                    <li>Congresos</li>
                </ul>
                <ul>
                    <h2>Eventos de inicio de cursos:</h2>
                    <li>Ceremonia de inicio de ciclo</li>
                    <li>Ceremonias cívicas</li>
                </ul>

                <ul>
                    <h2>Eventos del Normalismo:</h2>
                    <li>Culturales</li>
                    <li>Deportivos</li>
                </ul>
            </section>

            <section className="features">
                <h2>Características</h2>
                <ul>
                    <li>Fácil creación y administración de eventos</li>
                    <li>Plantillas personalizadas</li>
                    <li>Administración de invitados</li>
                    <li>Colaboración en tiempo real</li>
                    <li>Recordatorios y notificaciones</li>
                </ul>
            </section>
            <section className="testimonials"></section>
            <section className="contact"></section>
        </div>
    );
};

export default EventPlanner;
