
//表单正则
const reg = {
    username: /^[a-zA-Z0-9_-]{4,16}$/,
    password: /^.*(?=.{6,})(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*? ]).*$/
};

export {reg}