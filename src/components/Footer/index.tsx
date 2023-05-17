import React from "react";
import "./style.css"

export function Footer() {
  return (
    <footer className="footer">
      <section>
        <ul>
          <li>
            <a href="facebook.com" target="_blank">
              <img src="/imagens/fb.png" alt="facebook" />
            </a>
          </li>
          <li>
            <a href="twitter.com" target="_blank">
              <img src="/imagens/tw.png" alt="twitter" />
            </a>
          </li>
          <li>
            <a href="instagram.com/matheuskaully" target="_blank">
              <img src="/imagens/ig.png" alt="instagram" />
            </a>
          </li>
        </ul>
      </section>
      <section>
        <img src="/imagens/logo.png" alt="logo" />
      </section>
      <section>
        <p>
            Desenvolvido por <a target="_blank" href="https://github.com/matheuskaully">Matheus Kaúlly</a> ❤️
        </p>
      </section>
    </footer> 
  )
}
