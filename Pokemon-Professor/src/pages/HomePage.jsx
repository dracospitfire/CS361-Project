import PokeballThrow from "../animations/PokeballThrow";
import Navbar from "../components/Navigation/NavBar";

function HomePage() {
  return (
    <>
      <PokeballThrow />
      <h1>Pokémon Professor</h1>
      <Navbar />
      <main>
      </main>
      <article>
          <p>Nuevo Yue sits on the coastal edge of North America. In the midst of a growing climate crisis, after the destruction of Yue by way of rising tidal waves and erosion, the population migrated further inland to a territory that had been devastated by once in millennia wildfires. As much of the infrastructure had been destroyed, a group of technically inclined city planners, sociologists, and Pokemon trainers came together to initiate new regional planning efforts. Before rebuilding the region, they identified the need for a comprehensive database to guide development efforts.</p>
          <p>Nuevo Yue is being developed to house a projected population of 500,000 people over the next decade. This database will serve as a critical tool for tracking ongoing projects, identifying potential flaws, and addressing regional inequities to ensure fair and sustainable growth. More than a city, Nuevo Yue will be a living experiment in creating harmony between technology, nature, and human ambition. The database is the backbone of this vision, enabling informed decision-making to create a future-ready city that respects its past, learns from its challenges, and embraces the potential of data and Pokémon partnerships to forge a sustainable tomorrow. The database will act as a centralized repository for tracking key aspects of Nuevo Yue’s development. It will monitor Pokémon trainers’ activities, map out districts with unique themes, oversee the operations of Pokémon gyms, and document the intricate interplay between urban Zones, utilities, and natural ecosystems. Designed to track critical development projects across 10 districts, each accommodating up to 50,000 residents and featuring distinct themes like residential, commercial, and industrial Zones. The system will also record the activities of over 100 Pokémon trainers managing gyms and their battles. Additionally, it will track up to 1,000 utility partnerships and manage data on over 200 types of flora and fauna, ensuring harmony between the city’s technological growth and its natural environment. The database will be integrated into a website in order to allow the population to see progress, design, and to provide for public and open information. With the integration between Pokémon training, and city infrastructure information, the database and website will provide ample details which will assist stakeholders in resolving issues.</p>
      </article>
      <footer>
        &copy; 2025 Austin Flores
        <a href="https://github.com/dracospitfire/">
          <span className="github">
            GitHub: dracospitfire
          </span>
        </a>
      </footer>
    </>
  );
}

export default HomePage;
