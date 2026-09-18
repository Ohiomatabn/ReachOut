function AdminLoginForm() {
  return (
    <section>
      <div className="container">
        <form>
          <input type="text" placeholder="Email Address" />
          <input type="password" placeholder="Password" />
        </form>
      </div>
    </section>
  );
}

export default AdminLoginForm;
