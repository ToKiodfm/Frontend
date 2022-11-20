/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.portfolio.HM.controller;

import com.portfolio.HM.Dto.dtoExperiencia;
import com.portfolio.HM.Security.Controller.Mensaje;
import com.portfolio.HM.entity.Experiencia;
import com.portfolio.HM.service.ServExperiencia;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.apache.commons.lang3.StringUtils;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;

@RestController
@RequestMapping("experlab")
@CrossOrigin(origins = "http://localhost:4200")
public class CExperiencia {

    @Autowired
    ServExperiencia servExperiencia;

    @GetMapping("/lista")
    public ResponseEntity<List<Experiencia>> list() {
        List<Experiencia> list = servExperiencia.list();
        return new ResponseEntity(list, HttpStatus.OK);
    }

    @PostMapping("/create")
    public ResponseEntity<?> create(@RequestBody dtoExperiencia dtoExperiencia) {
        if (StringUtils.isBlank(dtoExperiencia.getNombreE())) 
            return new ResponseEntity(new Mensaje("Tienes que escribir algo"), HttpStatus.BAD_REQUEST);
        
        if (servExperiencia.existsByNombreE(dtoExperiencia.getNombreE())) 
            return new ResponseEntity(new Mensaje("Esa experiencia existe"), HttpStatus.BAD_REQUEST);
        

        Experiencia experiencia = new Experiencia(dtoExperiencia.getNombreE(), dtoExperiencia.getDescripcionE());
        servExperiencia.save(experiencia);

        return new ResponseEntity(new Mensaje("Experiencia agregada"), HttpStatus.OK);

    }

    @PutMapping("/update")
    public ResponseEntity<?> update(@PathVariable("id") int id, @RequestBody dtoExperiencia dtoExperiencia) {
        if (!servExperiencia.existsById(id))
            return new ResponseEntity(new Mensaje("El ID no existe"), HttpStatus.BAD_REQUEST);

        if (servExperiencia.existsByNombreE(dtoExperiencia.getNombreE()) && servExperiencia.getByNombreE(dtoExperiencia.getNombreE()).get().getId() != id)
                return new ResponseEntity(new Mensaje("Esa experiencia ya existe"), HttpStatus.BAD_REQUEST);
            

        if (StringUtils.isBlank(dtoExperiencia.getNombreE())) 
                return new ResponseEntity(new Mensaje("El nombre es obligatorio"), HttpStatus.BAD_REQUEST);
            

            Experiencia experiencia = servExperiencia.getOne(id).get();
            experiencia.setNombreE(dtoExperiencia.getNombreE());
            experiencia.setDescripcionE((dtoExperiencia.getDescripcionE()));

            servExperiencia.save(experiencia);
            return new ResponseEntity(new Mensaje("Experiencia actualizada"), HttpStatus.OK);

        }

        @GetMapping("/detail/{id}")
        public ResponseEntity<Experiencia> getById(@PathVariable("id")int id){
        if (!servExperiencia.existsById(id))
                return new ResponseEntity(new Mensaje("No existe"), HttpStatus.NOT_FOUND);
                   
        Experiencia experiencia = servExperiencia.getOne(id).get();
        
            return new ResponseEntity(experiencia, HttpStatus.OK);
        }

    

    public ResponseEntity<?> delete(@PathVariable("id") int id) {
        if (!servExperiencia.existsById(id)) 
            return new ResponseEntity(new Mensaje("El ID no existe"), HttpStatus.BAD_REQUEST);
        
        servExperiencia.delete(id);

        return new ResponseEntity(new Mensaje("Experiencia eliminada"), HttpStatus.OK);
    }

}
