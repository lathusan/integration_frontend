import axios from 'axios';

const FEEDBACK_API_BASE_URL = "http://localhost:8085/tourism/api/v1/feedback";

class FeedbackService{

    getFeedback(){
        return axios.get(FEEDBACK_API_BASE_URL);
    }

}

export default new FeedbackService()