const Navbar = (props) => {
    return (
        <div>
        
        <nav class="navbar navbar-expand-sm navbar-light bg-light">
            <a href="#" class="navbar-brand" mb-0>
              <img src="https://i.imgur.com/88AlrS5.jpg" alt="logo" width="100" height="100" border-radius="100%"/>
            </a>
            
            <span class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item active">
                        <a href="#" class="nav-link active">
                            Home
                        </a>
                    </li>
                    <li class="nav-item active">
                        <a href="#" class="nav-link active">
                            About
                        </a>
                    </li>
                    <li class="nav-item active">
                        <a href="#" class="nav-link active">
                            Services
                        </a>
                    </li>
                    <li class="nav-item active">
                        <a href="#" class="nav-link active">
                            Contact
                        </a>
                    </li>

                </ul>
            </span>

        </nav>
        </div>

    
    )
  }
  
  export default Navbar