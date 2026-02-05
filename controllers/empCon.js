import { getEmployee_infoDb, insertEmployee_InfoDb, updateEmployee_infoDb, deleteEmployee_infoDb, getpayrollDb, getattendanceDb, getleave_requestsDb, deletepayrollDb, deleteattendanceDb, deleteleave_requestsDb, insertpayrollDb, insertattendanceDb, insertleave_requestDb, updateattendanceDb, updateleave_requestsDb, updatepayrollDb} from "../models/empDb.js"

const getEmployee_infoCon = async (req, res) => {
    res.json({employees: await getEmployee_infoDb()})
}

const getpayrollCon = async (req, res) => {
    res.json({payrolls: await getpayrollDb()})
}

const getattendanceCon = async (req, res) => {
    res.json({attended: await getattendanceDb()})
}

const getleave_requestsCon = async (req, res) => {
    res.json({leave_requests: await getleave_requestsDb()})
}

const insertEmployee_infoCon = async (req, res) => {
    let {name, position, department, salary, employment_history, contact} = req.body
    await insertEmployee_InfoDb(name, position, department, salary, employment_history, contact)
    res.json({employees: await getEmployee_infoDb()})
}

const insertpayrollCon = async (req, res) => {
    let {employee_id, hours_worked, leave_requests, final_salary} = req.body
    await insertpayrollDb(employee_id, hours_worked, leave_requests, final_salary)
    res.json({employees: await getpayrollDb()})
}

const insertattendanceCon = async (req, res) => {
    let {attendance_date, attendance_status, employee_id} = req.body
    await insertattendanceDb(attendance_date, attendance_status, employee_id)
    res.json({attendance: await getattendanceDb()})
}

const insertleave_requestCon = async (req, res) => {
    let {employee_id, leave_request, leave_type, status} = req.body
    await insertleave_requestDb(employee_id, leave_request, leave_type, status)
    res.json({attendance: await getleave_requestsDb()})
}


const updateEmployee_infoCon = async (req, res) => {
    let {employee_id} = req.params
    let updates = req.body
    await updateEmployee_infoDb(employee_id, updates)
    res.json({employees: await getEmployee_infoDb()})
}

const updateattendanceCon = async (req, res) => {
    let {attendance_id, employee_id} = req.params
    let updates = req.body
    await updateattendanceDb(attendance_id, updates, employee_id)
    res.json({attendance: await getattendanceDb()})
}

const updateleave_requestsCon = async (req, res) => {
    let {leave_id, employee_id} = req.params
    let updates = req.body
    await updateleave_requestsDb(leave_id, updates, employee_id)
    res.json({attendance: await getleave_requestsDb()})
}

const updatepayrollCon = async (req, res) => {
    let {id, employee_id} = req.params
    let updates = req.body
    await updatepayrollDb(id, updates, employee_id)
    res.json({attendance: await getpayrollDb()})
}



const deleteEmployee_infoCon = async (req, res) => {
    const { employee_id } = req.params;
    await deleteEmployee_infoDb(employee_id)
    res.json({emoloyees: await getEmployee_infoDb()})
}

const deletepayrollCon = async (req, res) => {
    const { id } = req.params;
    await deletepayrollDb(id)
    res.json({payrolls: await deletepayrollDb()})
}

const deleteattendanceCon = async (req, res) => {
    const {attendance_id} = req.params;
    await deleteattendanceDb(attendance_id)
    res.json({attendance: await deleteattendanceDb()})
}

const deleteleave_requestsCon = async (req, res) => {
    const {leave_id} = req.params;
    await deleteleave_requestsDb(leave_id)
    res.json({attendance: await deleteleave_requestsDb()})
}



export {getEmployee_infoCon, insertEmployee_infoCon, updateEmployee_infoCon, deleteEmployee_infoCon, getpayrollCon, getattendanceCon, getleave_requestsCon, deletepayrollCon, deleteattendanceCon, deleteleave_requestsCon, insertpayrollCon, insertattendanceCon, insertleave_requestCon, updateattendanceCon, updateleave_requestsCon, updatepayrollCon}
