<script>
  function openModal() {
    document.getElementById('registerModal').style.display = 'block';
  }

  function closeModal() {
    document.getElementById('registerModal').style.display = 'none';
  }

  // Close modal when clicking outside the box
  window.onclick = function(event) {
    const modal = document.getElementById('registerModal');
    if (event.target === modal) {
      modal.style.display = "none";
    }
  }
</script>
