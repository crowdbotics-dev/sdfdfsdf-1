import axios from "axios"
import {
  NEW_CONNECTOR_USERNAME,
  NEW_CONNECTOR_PASSWORD
} from "react-native-dotenv"
const newConnector = axios.create({
  baseURL: "https://cbdash-pr-5028.herokuapp.com/dashboard/app/1/connectors",
  auth: { username: NEW_CONNECTOR_USERNAME, password: NEW_CONNECTOR_PASSWORD },
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
export const apiService = {}
