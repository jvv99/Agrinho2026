package com.agroforte.site.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "*") 
public class ContatoController {

    @PostMapping("/contato")
    public ResponseEntity<String> receberContato(
            @RequestParam("nome") String nome,
            @RequestParam("email") String email,
            @RequestParam("mensagem") String mensagem) {
        
        System.out.println("--- Nova mensagem recebida do site Agroforte ---");
        System.out.println("Nome do produtor: " + nome);
        System.out.println("E-mail de contato: " + email);
        System.out.println("Mensagem: " + mensagem);
        System.out.println("-------------------------------------------------");

        String respostaSucesso = "<html><body style='font-family:sans-serif; text-align:center; padding-top:50px; color:#27ae60;'>"
                + "<h2>Obrigado, " + nome + "!</h2>"
                + "<p>Sua mensagem sobre o futuro sustentável foi recebida com sucesso. Nossa equipe entrará em contato em breve.</p>"
                + "<br><a href='http://localhost:5500/index.html' style='color:#2c3e50; font-weight:bold;'>Voltar para o site</a>"
                + "</body></html>";

        return ResponseEntity.ok().body(respostaSucesso);
    }
}