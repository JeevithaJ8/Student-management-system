@RestController
@RequestMapping("/students")
public class StudentController {
    @Autowired
    private StudentService service;

    @PostMapping
    public Student create(@RequestBody Student s) { return service.addStudent(s); }

    @GetMapping
    public List<Student> readAll() { return service.getStudents(); }

    @PutMapping("/{id}")
    public Student update(@PathVariable Long id, @RequestBody Student s) { return service.updateStudent(id, s); }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable Long id) { service.deleteStudent(id); }
}
