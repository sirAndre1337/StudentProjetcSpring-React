import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button, Container, Paper } from '@mui/material';
import { useEffect, useState } from 'react';
import { Send } from '@mui/icons-material';

export default function Student() {

    const paperStyle = { padding: '50px 20px', width: 600, margin: "20px auto" }
    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [students, setStudents] = useState([]);

    useEffect(() => {
        console.log('Entrou')
        fetch('http://localhost:8080/student/getAllStudents')
            .then(response => response.json())
            .then(data => setStudents(data));
    }, [])

    const handleClick = (e) => {
        e.preventDefault()
        const student = { name, address }
        console.log(student)
        fetch('http://localhost:8080/student/add', {
            method: "POST",
            headers: { "Content-type": "application/json" },
            body: JSON.stringify(student)
        })
            .then(() => {
                console.log("New Student Add")
            })
    }


    return (
        <Container>
            <Paper elevation={3} style={paperStyle}>
                <h1 style={{ color: "blue" }}><u>Add Student</u></h1>
                <Box
                    component="form"
                    sx={{
                        '& > :not(style)': { m: 1 },
                    }}
                    noValidate
                    autoComplete="off"
                >
                    <TextField id="standard-basic" label="Student Name" variant="standard" fullWidth value={name} onChange={(e) => { setName(e.target.value) }} />
                    <TextField id="standard-basic" label="Student Address" variant="standard" fullWidth value={address} onChange={(e) => setAddress(e.target.value)} />
                    <Button variant="contained" endIcon={<Send />} onClick={handleClick}>
                        Send
                    </Button>

                </Box>
            </Paper>
            <h1>Students</h1>
            <Paper elevation={3} style={paperStyle}>
                {students.map((stu) => {
                    return (
                        <Paper elevation={6} style={{ margin: "10px", padding: "15px", textAlign: "left" }} key={stu.id}>
                            id : {stu.id}<br />
                            name: {stu.name}<br />
                            address: {stu.address}<br />
                        </Paper>)
                })}
            </Paper>
        </Container>
    );
}
