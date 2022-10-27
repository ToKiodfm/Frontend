package com.portfolio.HM.interfaz;

import com.portfolio.HM.entity.Persona;
import java.util.List;

public interface IPersonaService {
    //traer lista personas
    public List<Persona> getPersona();
    
    //guardar persona
    public void savePersona(Persona persona);
    
    //eliminar objeto por id
    public void deletePersona(Long id);
    
    //buscar persona por id
    public Persona findPersona(Long id);
    
}
