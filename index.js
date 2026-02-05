import express from 'express'
import { deleteEmployee_infoCon, getEmployee_infoCon, insertEmployee_infoCon, updateEmployee_infoCon, getpayrollCon, getattendanceCon, getleave_requestsCon, deletepayrollCon, deleteattendanceCon, deleteleave_requestsCon, insertpayrollCon, insertattendanceCon, insertleave_requestCon, updateattendanceCon, updateleave_requestsCon, updatepayrollCon} from './controllers/empCon.js';
const app = express()
app.use(express.json());


app.get('/employees', getEmployee_infoCon)
app.get('/payroll', getpayrollCon)
app.get('/attendance', getattendanceCon)
app.get('/leave_requests', getleave_requestsCon)


app.post('/employees', insertEmployee_infoCon)
app.post('/payroll/:id', insertpayrollCon)
app.post('/attandance/:attendance_id', insertattendanceCon)
app.post('/leave_requests/:leave_id', insertleave_requestCon)


app.patch('/employees/:employee_id', updateEmployee_infoCon)
app.patch('/employee/:employee_id/attendance/:attendance_id', updateattendanceCon)
app.patch('/leave_requests/:leave_id/:employee_id', updateleave_requestsCon)
app.patch('/payroll/:id/:employee_id', updatepayrollCon)

app.delete('/employees/:employee_id', deleteEmployee_infoCon)
app.delete('/payroll/:id', deletepayrollCon)
app.delete('/attendace/:attendance_id', deleteattendanceCon)
app.delete('/leave_request/:leave_id', deleteleave_requestsCon)

app.listen(5000, () => {
    console.log('Server running on port http://localhost:5000');
});


