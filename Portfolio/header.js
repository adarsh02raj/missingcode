const templete = document.createElement('template')

templete.innerHTML = 
`
<header>
        <nav>
            <ul id="lists">
                <li class="links-brand">
                    <a href="#">Missing Code</a>
                </li>
                <li class="links">
                    <a href="#">Experience</a>
                </li>
                <li class="links">
                    <a href="#">Project</a>
                </li>
                <li class="links">
                    <a href="#">Skills</a>
                </li>
            </ul>
        </nav>
    </header>
`
document.body.appendChild(templete.content)