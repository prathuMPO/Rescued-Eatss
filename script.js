<script>
    // Close the hamburger menu when a link is clicked
    const navLinks = document.querySelectorAll("nav ul li a");
    const hamburger = document.getElementById("nav_check");

    navLinks.forEach(link => {
        link.addEventListener("click", () => {
            hamburger.checked = false;
        });
    });
</script>
