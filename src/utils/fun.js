export const login = (token) => {
	localStorage.setItem("TOKEN_KEY", token);
};
export const logout = () => {
	localStorage.removeItem("TOKEN_KEY");
	localStorage.removeItem("user_inst_id");
};
export const getToken = () => {
	return "Bearer " + localStorage.getItem("TOKEN_KEY");
};
export const isLogin = () => {
	if (localStorage.getItem("TOKEN_KEY")) return true;
	else return false;
};
export const setInstituteId = (instituteId) => {
	return localStorage.setItem("user_inst_id", instituteId);
};
export const getInstituteId = () => {
	return localStorage.getItem("user_inst_id");
};
function setLoginMethod(methodCode) {
	// methodCode -> 1 - Credentials Fill Login on Ekart , 2 - Auto Login using URL
	localStorage.setItem("loginMethod", methodCode);
}
function getLoginMethod() {
	return localStorage.getItem("loginMethod");
}
function rmvLoginMethod() {
	localStorage.removeItem("loginMethod");
}
export { setLoginMethod, getLoginMethod, rmvLoginMethod };