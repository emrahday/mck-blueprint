
const API_URI = 'http://localhost:9000'

const uri = {
    GET_REPORT : `${API_URI}/reports`,
    RESOLVE : id => `${API_URI}/reports/${id}`,
    BLOCK : id => `${API_URI}/reports/${id}/block`
}

// TODO handle api errors

const api = {
    getReportList: async () => {
        try {
            let response = await fetch(uri.GET_REPORT);
            let data = await response.json()
            return data;
        } catch (error) {
            throw error;
        }
    },
    resolveElement: async id => {
        try {
            let response = await fetch(uri.RESOLVE(id), { method: 'PUT'});
            let data = await response.json()
            return data;
        } catch (error) {
            throw error;
        }
    },
    blockElement: async id => {
        try {
            let response = await fetch(uri.BLOCK(id), { method: 'PUT'});
            let data = await response.json()
            return data;
        } catch (error) {
            throw error;
        }
    }
}

export default api;