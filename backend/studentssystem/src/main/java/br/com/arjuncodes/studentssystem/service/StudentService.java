package br.com.arjuncodes.studentssystem.service;

import java.util.List;

import br.com.arjuncodes.studentssystem.model.Student;

public interface StudentService {
	public Student saveStudent(Student student);
	public List<Student> getAllStudents();
}
