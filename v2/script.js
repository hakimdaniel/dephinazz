
      window.onload = () => {
        setTimeout(() => {
          // Tambahkan kelas fade-out untuk memulai efek fading
          const loadingElement = document.getElementById("loading");
          loadingElement.style.opacity = 0;

          // Setelah transisi selesai (1 detik), sembunyikan elemen loading dan tampilkan konten
          setTimeout(() => {
            loadingElement.style.display = "none"; // Sembunyikan elemen loading
            document.getElementById("content").style.display = "block"; // Tampilkan konten
          }, 1000); // 1000ms adalah durasi dari transisi fade-out
        }, 3000); // Tunggu selama 3 detik sebelum memulai fade-out
      };
      // Get button and body elements
      const toggleButton = document.getElementById("toggleMode");
      const body = document.body;

      // Check local storage for saved mode
      const currentMode = localStorage.getItem("mode");
      if (currentMode === "night") {
        body.classList.add("night-mode");
        toggleButton.innerHTML = '<i class="fa-solid fa-sun"></i>';
        document.body.style.color = "white";
      }

      // Add event listener to the button
      toggleButton.addEventListener("click", () => {
        if (body.classList.contains("night-mode")) {
          body.classList.remove("night-mode");
          toggleButton.innerHTML = '<i class="fa-solid fa-moon"></i>';
          document.body.style.color = "black";
          localStorage.setItem("mode", "day"); // Save mode to local storage
        } else {
          body.classList.add("night-mode");
          toggleButton.innerHTML = '<i class="fa-solid fa-sun"></i>';
          document.body.style.color = "white";
          localStorage.setItem("mode", "night"); // Save mode to local storage
        }
      });
