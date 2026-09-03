// Database for dynamic modals
const modalData = {
  // PROJECTS
  syslocker: {
    category: "Engineering Project • Biometrics & Security",
    title: "SysLocker • Biometric Locker Access",
    image: "assets/img/Syslocker.jpg",
    body: `
      <p><strong>System Architecture & Pipeline:</strong></p>
      <ul class="list-disc pl-5 space-y-1.5">
        <li><strong>Face Detection & Embeddings:</strong> Real-time feature extraction in a 128-dimensional latent space using OpenCV and deep convolutional neural networks.</li>
        <li><strong>Anti-Spoofing Verification:</strong> Live texture and depth validation via lightweight ONNX runtime models to prevent photographic and video replay attacks.</li>
        <li><strong>Data Protection:</strong> Local credential storage and audit logs secured with symmetrical <strong>AES-256 encryption</strong>.</li>
        <li><strong>Hardware Integration:</strong> Control logic interfacing webcam feeds with physical microcontrollers to trigger automated electronic locking mechanisms.</li>
      </ul>
      <div class="pt-3">
        <a href="https://github.com/Jaime-Gabriel-Hernandez-Garcia/TrabajoTerminal_2026-A075.git" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-1.5 font-mono text-xs text-blush-500 font-semibold hover:underline">
          <span>Explore GitHub Repository</span>
          <svg class="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
        </a>
      </div>
    `
  },
  sismos: {
    category: "Engineering Project • Data & Software Architecture",
    title: "Seismic Activity Monitoring & Analysis Platform",
    image: "assets/img/sismos.jpg",
    body: `
      <p><strong>System Architecture & Key Functionality:</strong></p>
      <ul class="list-disc pl-5 space-y-1.5">
        <li><strong>Data Processing & Filtering:</strong> Engineered structured data pipelines to parse, clean, and organize historical and live seismic telemetry data.</li>
        <li><strong>Query & Analytical Logic:</strong> Designed search and aggregation algorithms to analyze magnitudes, focal depths, and geographical epicenter coordinates.</li>
        <li><strong>Visualization & Architecture:</strong> Modular software structure focused on reliability, performance, and clear analytical dashboards for seismic risk tracking.</li>
        <li><strong>Version Control & Collaboration:</strong> Managed collaborative workflows and source code versioning using Git and GitHub.</li>
      </ul>
      <div class="pt-3">
        <a href="https://github.com/LizethDG/ProyectoSismos" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-1.5 font-mono text-xs text-blush-500 font-semibold hover:underline">
          <span>Explore GitHub Repository</span>
          <svg class="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
        </a>
      </div>
    `
  },

  // HOBBIES GALLERY
  hobby_gaming: {
    category: "Personal Space • Hobbies",
    title: "Gaming & Interactive Worlds",
    gallery: [
      "assets/img/CookieRun.jpg", "assets/img/StardewValley.png", "assets/img/StarRail.jpg",
      "assets/img/Subnautica.jpg", "assets/img/ZZZ.jpg", "assets/img/Nintendo.jpg"
    ],
    body: `
      <p>Exploring diverse video game genres, with a focus on immersive sound design, intricate game logic, and responsive combat mechanics across PC and console environments.</p>
    `
  },

  hobby_cat: {
    category: "Personal Space • Companionship",
    title: "My Feline Companion Mochi",
    gallery: [
      "assets/img/Mochi1.jpg", "assets/img/Mochi2.jpg", "assets/img/Mochi3.jpg",
      "assets/img/Mochi4.jpg", "assets/img/Mochi5.jpg"
    ],
    body: `
      <p>Moments with my cat—providing warmth, peaceful breaks between study routines, and quiet company during late-night.</p>
    `
  },

  hobby_learning: {
    category: "Personal Space • Continuous Learning",
    title: "Learning & Exploration Gallery",
    gallery: [
      "assets/img/Certificado.jpg", "assets/img/Reverso.jpg"
    ],
    body: `
      <p>Hands-on experimentation with modern development tools, new programming concepts, and creative frameworks that keep curiosity and problem-solving sharp.</p>
    `
  },

  // CRYPTOGRAPHY FACTS
  pqc: {
  category: "Modern Cryptography • Post-Quantum",
  title: "Post-Quantum Cryptography (FIPS 203 / 204)",
  video: "https://www.youtube.com/embed/crPe69NeTdk",
  body: `
    <p>Shor's algorithm proves that sufficiently large quantum computers will break traditional RSA and Elliptic Curve public-key cryptography. To mitigate this global threat, NIST finalized the first official Post-Quantum Cryptography (PQC) standards.</p>
    <p>These algorithms, such as ML-KEM (Kyber) and ML-DSA (Dilithium), rely on the hardness of high-dimensional lattice problems, ensuring digital communications remain uncrackable even by quantum adversaries.</p>
  `
},

zkp: {
  category: "Modern Cryptography • Protocols",
  title: "Zero-Knowledge Proofs (ZKP)",
  video: "https://www.youtube.com/embed/SYDCV6pVHLI?si=6dzIXmzSdAnDhhvu",
  body: `
    <p>Formulated by Goldwasser, Micali, and Rackoff, a Zero-Knowledge Proof enables one party to mathematically prove to another that a statement is true without revealing any information beyond the validity of the statement itself.</p>
    <p>Widely utilized in privacy-preserving blockchains, zero-trust authentication, and secure electronic voting, ZKPs allow authentication without ever transmitting or exposing private passwords.</p>
  `
},

dualec: {
  category: "Modern Cryptography • Kleptography",
  title: "The Dual_EC_DRBG Backdoor",
  video: "https://www.youtube.com/embed/xanhbvtc5bY?si=HA-TE6zu0U3wdhjL",
  body: `
    <p>In 2006, NIST standardized the Dual_EC_DRBG pseudorandom number generator based on elliptic curves. Cryptographers quickly noted that the default curve points P and Q could harbor a mathematical kleptographic backdoor.</p>
    <p>Subsequent investigations confirmed that whoever held the discrete logarithm relation between both points could reconstruct the internal state and predict every encryption key generated by the algorithm.</p>
  `
}
};