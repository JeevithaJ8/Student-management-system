@Service
public class StudentService {
    @Autowired
    private StudentRepository repo;

    public Student addStudent(Student s) 
{
return repo.save(s);
}
    public List<Student> 
getStudents() 
{ 
return repo.findAll();
}
    public Student updateStudent(Long id, Student s)
{ 
s.setId(id);
return repo.save(s);
}
    public void deleteStudent(Long id)
{ 
repo.deleteById(id); 
}
}
