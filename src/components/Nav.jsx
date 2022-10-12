function Nav () {
    return (
        <nav class="navbar navbar-expand-lg bg-dark text-uppercase">
        <a class="nav-link text-light" href="/">Kévin Monféry</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item active">
              <a class="nav-link text-light" href="/devlogs">Experience</a>
            </li>
            <li class="nav-item">
              <a class="nav-link text-light" href="/wiki">Projects</a>
            </li>
            <li class="nav-item">
              <a class="nav-link text-light" href="/contact">Contact</a>
            </li>
          </ul>
        </div>
      </nav>
    );
}

export default Nav; 