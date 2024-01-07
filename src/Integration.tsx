import axios from 'axios';

const sendDataToBackend = async (data: any) => {
    try {
        const response = await axios.post('http://localhost:5000/analyze-text', { texts: data });
        console.log(response.data);
    } catch (error) {
        console.error('Error sending data:', error);
    }
};

const dataToSend = ["I hate you bruh"];
sendDataToBackend(dataToSend);
