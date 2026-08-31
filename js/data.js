// Database for dynamic modals
const detailData = {
  // PROJECTS
  syslocker: {
    category: "Engineering Project • Biometrics & Security",
    title: "SysLocker • Biometric Locker Access",
    video: "assets/video/syslocker-demo.mp4",
    body: `
      <p><strong>System Architecture & Pipeline:</strong></p>
      <ul class="list-disc pl-5 space-y-1.5">
        <li><strong>Face Detection & Embeddings:</strong> Real-time feature extraction in a 128-dimensional latent space using OpenCV and deep convolutional neural networks.</li>
        <li><strong>Anti-Spoofing Verification:</strong> Live texture and depth validation via lightweight ONNX runtime models to prevent photographic and video replay attacks.</li>
        <li><strong>Data Protection:</strong> Local credential storage and audit logs secured with symmetrical <strong>AES-256 encryption</strong>.</li>
        <li><strong>Hardware Integration:</strong> Control logic interfacing webcam feeds with physical microcontrollers to trigger automated electronic locking mechanisms.</li>
      </ul>
    `
  },
  cnn: {
    category: "Engineering Project • Machine Learning",
    title: "CNN Pattern & Image Classifier",
    video: "assets/video/cnn-demo.mp4",
    body: `
      <p><strong>Pipeline Architecture & Training:</strong></p>
      <ul class="list-disc pl-5 space-y-1.5">
        <li><strong>Data Pipeline:</strong> Automated data ingestion, normalization, and tensor batch transformations built with PyTorch and Scikit-Learn.</li>
        <li><strong>Network Architecture:</strong> Convolutional feature extractors, ReLU activation layers, max pooling, and fully connected classification layers.</li>
        <li><strong>Metrics & Convergence:</strong> Analyzed training and validation loss curves, computing confusion matrices to benchmark accuracy across epochs.</li>
      </ul>
    `
  },

  // CRYPTOGRAPHY FACTS
  enigma: {
    category: "Historical Cryptography",
    title: "The Enigma Machine & Turing's Bombe",
    video: "assets/video/enigma-explained.mp4",
    body: `
      <p>Used extensively during World War II, the Enigma machine utilized an electromechanical rotor mechanism that scrambled the 26 letters of the alphabet.</p>
      <p>With plugboard permutations, the machine offered over <strong>150 trillion possible configurations</strong>. Alan Turing and Gordon Welchman at Bletchley Park engineered the <em>Bombe</em> machine, exploiting mathematical keystream contradictions to deduce rotor settings daily.</p>
    `
  },
  scytale: {
    category: "Classical Transposition Cipher",
    title: "The Spartan Scytale",
    video: "assets/video/scytale-explained.mp4",
    body: `
      <p>Dating back to ancient Greece, the Scytale is recognized as the earliest military cryptographic apparatus.</p>
      <p>It functioned as a <strong>transposition cipher</strong>: a narrow strip of parchment was wrapped spirally around a baton of precise radius. The message was written longitudinally; once unwound, the characters appeared scrambled until rewrapped on a baton of matching diameter.</p>
    `
  },
  voynich: {
    category: "Unsolved Cryptographic Puzzle",
    title: "The Voynich Manuscript",
    video: "assets/video/voynich-explained.mp4",
    body: `
      <p>Carbon-dated to the early 15th century, the Voynich manuscript is a 240-page illustrated codex containing herbal, astronomical, and cosmological diagrams.</p>
      <p>Its writing system consists of an unknown 20–25 character alphabet with natural language statistical properties (Zipf's law). Despite exhaustive cryptanalysis by world-class codebreakers and modern NLP AI models, the text has never been deciphered.</p>
    `
  }
};