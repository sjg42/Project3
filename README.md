# Diabetes Data Exploration
###### Collaboraters: Steve Kennedy, Cole Valentyn, Leslie Trejo, Juliana Park, Kara Simone, Talita Urzeda, Rod Hughes, Lynn Orr, Sam Gantman, Kelly Hendre

###### Disclaimer: The information provided by this team is intended for educational and informational purposes only and is not intended to be a substitute for professional medical advice, diagnosis, or treatment. The content on this website is not intended to diagnose, treat, cure, or prevent any disease or medical condition, including diabetes. The information provided is based on general research and data and is not tailored to individual health conditions or circumstances. Therefore, we cannot guarantee the accuracy, completeness, or timeliness of the information provided. If you suspect that you have diabetes or any other medical condition, you should consult a qualified healthcare provider immediately. Do not rely solely on the information provided by this team of collaborators for your health or well-being. By viewing the Diabetes Data Exploration dashboard, you acknowledge and agree that we are not responsible or liable for any claim, loss, or damage resulting from your use of the information provided.

## Plan:

Invoke the Diabetes Health Indicators Dataset to provide people who wish to explore and manage their risk factors for diabetes.  The goal of this dashboard is to raise awareness of the user and encourage early detection of risk factors for diabetes. The team will use MongoDB to first establish the database, and the utilize JS libraries such as D3, Bootstrap, and Vue.js to visualize the data. The data components will be tested for correlations and conditional probabilities such as: high blood pressure with diagnosis of diabetes or the probability of diabetes with two simultaneous indicators.  

The dashboard will contain multiple visualizations for the data including a bar chart, gaurge, and line graph. 

## Data

Data from Kaggle is cleaned in Jupyter and loaded into MongoDB inorder to be used throughout the project. It contains 250,000+ rows of data that depict different health indicators...

- Blood pressure
- Cholesterol
- BMI
- Smoking habits
- Strokes
- Heart disease
- Physical activity
- etc.

## Visuals

### Disclaimer and HTML setup
Collaborators: Kelly Hendre, Juliana Park, Sam Gantman

### Gauge 

<img width="730" alt="Screenshot 2023-05-17 at 3 38 38 PM" src="https://github.com/sjg42/Project3/assets/121995835/5d07705a-2818-4ef0-a0ac-1b6932f8508b">

The objective of the gauge is to allow the percent of the population with Type 2 Diabetes to compare their likelyhood of their diabetes diagnosis to a common indicator like high blood pressure.

Collaborators: Sam Gantman, Kara Simone, Lynn Orr

### Bar Graph

<img width="933" alt="Screenshot 2023-05-17 at 3 39 15 PM" src="https://github.com/sjg42/Project3/assets/121995835/d6c9283a-3c69-42ec-b281-7d0db05ef762">

The objective of the bar graph is to allow people to compare their own health to common health indicators that may lead to diabetes. We compare these indicators and the total number of individuals who have experienced them in the data to the overall population percent. We are aware that those with these indicators have a higher probability of developing Type 2 diabetes as opposed to those who do not.

Collaborators: Kelly Hendre, Steve Kennedy, Talita Urzeda

### Line Graph

<img width="949" alt="Screenshot 2023-05-17 at 4 10 11 PM" src="https://github.com/sjg42/Project3/assets/121995835/846e6ec5-7a49-42af-986a-1da7dcb16c1a">

The objective of the line graph is to visualize the difference in the mean BMIs between the nondiabetic individuals and diabetic individuals. 

Collaborators: Rod Hughes, Leslie Trejo, Cole Valentyn, Sam Gantman

### Conclusion 

Through the process of cleaning and manipulating our data so that we may view it in a straightforward way through Jupyter, MongoDB, Python, JavaScript, and HTML we may conclude that Type 2 Diabetes is a prevelant disease in America that has the potential to be prevented once an individual examines the signs and indicators and changes some day to day habits that can pay off in the longrun!

### Sources
•	https://www.kaggle.com/datasets/alexteboul/diabetes-health-indicators-dataset![image]


