package br.com.arjuncodes.studentssystem.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import br.com.arjuncodes.studentssystem.model.Student;

@Repository
public interface StudentRepository extends JpaRepository<Student, Long>{

}
