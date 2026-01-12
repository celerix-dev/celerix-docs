---
outline: deep
---

# Getting Started with Celerix

Welcome to Celerix. This documentation will explain the core architecture that keeps your data safe, your privacy intact, and your workflow fast.

## 🛡️ The Celerix Philosophy: "Local-First"

Most modern tools rely on the cloud for synchronization and processing. Celerix takes a different path by keeping your logic where it belongs: on your machine.

**What "Local-First" means for you:**
* **Zero Accounts:** No sign-ups, no passwords, no "Log in with Google." You own the app, the app doesn't own you.
* **Privacy by Design:** We don't track which tools you use or how you use them. Your behavior isn't a data point.
* **True Offline Utility:** Every core utility—from JSON formatting to the Terminal—runs entirely on your hardware. If your internet goes out, Celerix applications keep working.

## 🚀 Native Performance, Web Flexibility

Celerix is built with a specific technical mission: **High performance without platform silos.**

### Why Not Electron?
While Electron made cross-platform apps easy, it came at a cost: high memory usage and massive binary sizes. We purposely avoided Electron because we believe a developer toolbox shouldn't eat 1GB of RAM just to format a JSON string.

### The Best of Both Worlds
To ensure Celerix is available to everyone—regardless of whether you're on **macOS, Windows, or Linux**—we chose modern, lightweight application frameworks:

* **Tauri + Rust:** Used for our high-performance modules (like the Terminal and PTY bridging). It leverages your OS's native webview to keep the footprint tiny while providing the memory safety and speed of Rust.
* **Wails + Go:** Powering our data-heavy utilities with the efficiency of Go, ensuring that even complex operations feel instantaneous.

By using web-based technology for the UI, we ensure a consistent, beautiful experience for every developer, while the native backends (Rust/Go) ensure the app stays "slim and trim."

## 🔒 Security Verification

Because we believe in **Open Sovereignty**, we don't expect you to take our word for it. We encourage you to verify our claims:

* **Audit the Code:** All logic is transparent and open-source at [github.com/celerix-dev](https://github.com/celerix-dev).
* **Monitor the Wire:** Use tools like Wireshark or Little Snitch while using Celerix. You will see zero outgoing traffic to our servers because we don't have any servers to talk to.

## Next Steps
Ready to dive in? Check out our **Installation Guide** or jump straight into the **Terminal Setup**.