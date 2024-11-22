package com.example.backend.services;

import com.example.backend.models.Elemento;
import org.springframework.stereotype.Service;

import java.util.Arrays;
import java.util.List;

@Service
public class ElementoService {

    public List<Elemento> obtenerElementos() {
        // Datos de ejemplo (en un proyecto real, se obtendrían de una base de datos)
        return Arrays.asList(
                new Elemento(1, "Elemento 1", "Descripción del elemento 1"),
                new Elemento(2, "Elemento 2", "Descripción del elemento 2")
        );
    }
}
