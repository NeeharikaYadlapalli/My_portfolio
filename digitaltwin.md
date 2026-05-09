A MAJOR PROJECT REPORT 
ON 
MACHINE LEARNING - BASED DIGITAL TWIN FOR 
PREDICTIVE MODELLING IN WIND TURBINES 
Submitted in partial fulfillment of the requirements for the award of the degree in 
BACHELOR OF TECHNOLOGY 
IN 
INFORMATION TECHNOLOGY 
BY 
Y NEEHARIKA 
D MADHUVARSHA 
K VEDAVATHI 
S DEEKSHITHA 
M FOUZIA 
Under the Esteemed Guidance of 
Dr. K.V.S.S. Rama Krishna 
Associate Professor 
(20NN1A1263) 
(20NN1A1210) 
(20NN1A1227) 
(20NN1A1258) 
(20NN1A1237) 
DEPARTMENT OF INFORMATION TECHNOLOGY 
VIGNAN’S NIRULA INSTITUTE OF TECHNOLOGY AND SCIENCE FOR WOMEN 
(Approved by AICTE, NEW DELHI and Affiliated to JNTUK) 
PEDAPALAKALURU, GUNTUR-522005 (2020-2024) 
VIGNAN’S NIRULA INSTITUTE OF TECHNOLOGY AND SCIENCE FOR WOMEN 
(Approved by AICTE, NEW DELHI and Affiliated to JNTUK) 
PEDAPALAKALURU, GUNTUR-522005 
(2020-2024) 
DEPARTMENT OF INFORMATION TECHNOLOGY 
CERTIFICATE 
This is to certify that the project work entitled “MACHINE LEARNING - BASED DIGITAL 
TWIN FOR PREDICTIVE MODELLING IN WIND TURBINES “is a bonafide work 
submitted by Y Neeharika (20NN1A1263), D Madhu Varsha(20NN1A1210), K Vedavathi 
(20NN1A1227), S Deekshitha (20NN1A1258) and M Fouzia (20NN1A1237) from the department 
of Information Technology in the partial fulfillment of the requirements forward of degree of 
Bachelor of Technology in Information Technology from Vignan’s Nirula Institute of Technology 
& Science for Women, Guntur. 
Project Guide 
Dr. K.V.S.S. Rama Krishna 
Associate Professor  
External Examiner 
Head of the Department 
Dr. K.V.S.S. Rama Krishna 
Associate Professor 
DECLARATION 
We hereby declare that the work described in this project work, entitled “MACHINE 
LEARNING - BASED DIGITAL TWIN FOR PREDICTIVE MODELLING IN WIND 
TURBINES” which is submitted by us in partial fulfillment for the award of Bachelor of 
Technology in the department of Information Technology to the Vignan’s Nirula Institute of 
Technology & Science for women, affiliated to Jawaharlal Nehru Technological University 
Kakinada, Andhra Pradesh, is the result of work done by us under the esteemed guidance of 
Dr. K.V.S.S Rama Krishna, Associate Professor. 
The work is original and has not been submitted for any Degree/Diploma of this or any other 
university. 
Y NEEHARIKA 
D MADHUVARSHA 
K VEDAVATHI 
S DEEKSHITHA 
M FOUZIA 
(20NN1A1263) 
(20NN1A1210) 
(20NN1A1227) 
(20NN1A1258) 
(20NN1A1237) 
ACKNOWLEDGEMENT 
We profoundly grateful to express our deep sense of gratitude and respect towards our 
honorable chairman, LAVU RATHAIAH sir, Chairman of Vignan group for his precious 
support in the college. 
We are much thankful to Dr. P. RADHIKA, Principal VNITSW, Guntur, for her support 
during and till the completion of the project. 
We would like to thank Dr. K.V.S.S Rama Krishna, Associate Professor and Head of the 
Department of Information Technology, for his extended and continuous support, valuable 
guidance and timely advices in the completion of this project thesis. 
We wish to express our profound sense of sincere gratitude to our Project Guide, Dr. K.V.S.S 
Rama Krishna, Associate Professor of Information Technology, without whose help, 
guidance and motivation this project thesis could not have been completed the project 
successfully. 
We also thank all the faculty of the Department of Information Technology for their help and 
guidance of numerous occasions, which has given us the cogency to build-up adamant 
aspiration over the completion of our project thesis and finally, we thank one and all who 
directly or indirectly helped us to complete our project thesis successfully. 
Y NEEHARIKA 
D MADHUVARSHA 
K VEDAVATHI 
S DEEKSHITHA 
M FOUZIA 
(20NN1A1263) 
(20NN1A1210) 
(20NN1A1227) 
(20NN1A1258) 
(20NN1A1237) 
TABLE OF CONTENTS 
S. No 
Contents 
1 
Page No 
Introduction 
2 
1-4 
Literature Survey 
3 
4-7 
System Analysis and Description 
4 
8-18 
Requirement Specification 
5 
19-24 
Languages of Implementation 
6 
25-37 
System Design 
7 
26-65 
Implementation 
8 
66-73 
System Testing 
9 
Conclusion 
74-81 
10 
82 
Future Enhancement 
11 
83 
Bibliography 
84-86 
LIST OF FIGURES 
Figure 
Fig 1.1.1 
Description 
An active power generation and theoretical power 
curves concerning wind speed are presented 
Fig 3.1.1 
KNN Algorithm 
Fig 3.2.1 
Diagram of proposed framework 
Fig 3.2.2 
Architecture of the proposed framework 
Fig 3.3.1 
Workflow of the Proposed System 
Fig 3.4.1 
A knowledge graph of wind farms 
Fig 3.5.1 
Software Development Life Cycle 
Fig 3.5.2 
Study of the System 
Fig 6.2.1 
UML diagrams Overview 
Fig 6.2.2 
Use Case Diagram 
Fig 6.2.3 
Sequence Diagram 
Fig 6.2.4 
Collaboration Diagram 
Fig 6.2.5 
Component Diagram 
Fig 6.2.6 
Class Diagram 
Fig 6.2.7 
Deployment Diagram 
Fig 7.2.1 
Output Interface 
Fig 7.3.1 
Dataset Details 
Fig 7.4.1 
KNN vs GBT 
LIST OF TABLES 
Table 
Description 
Table 1 
The wind turbine with data collection information 
Table 2 
Test cases 
ACRONYMS 
• 5G-NG-RAN-5G-Next Generation- Radio Access Network 
• KNN-K nearest neighbor 
• GBT-Gradient Boosting Trees 
• FEA-Finite Element Analysis 
• CFD-Computational Fluid Dynamics 
• SDLC-Software Development Life Cycle 
• SCADA- Supervisory Control and Data Acquisition 
• AMF-Mobility Management Function 
• UPF-User Plane Function 
• WSGI- Web Server Gateway Interface 
• UML-Unified Modeling Language 
ABSTRACT 
Wind turbines are one of the primary sources of renewable energy. It does not release any 
carbon emissions to pollute our planet. It is an eco-friendly system. The wind farms monitoring 
and power generation predictive is a complex problem due to the unpredictability of wind 
speed. In general, is assessed on a one-day analysis of a specialist. This model uses analysis of 
data over long period of time instead of one day analysis using a digital simulation of the wind 
mill. So, this project encourages the usage of machine learning technologies to improve the 
accuracy of wind speed and power generation prediction. Often it proves to be in accurate due 
to physical limitations. So, a greater number of data observation can make it accurate enough. 
Our proposed model solves this challenge by utilizing a 5G-Next Generation- Radio Access 
Network (5G-NG-RAN). The developed model is based on Microsoft Azure digital twin 
infrastructure as a 5-dimensional digital twins’ platform. The predictive modeling is based on 
a machine learning approach by a Gradient Boosting Trees (GBT). The predictive modeling 
has two components. The first component is process of series of data of wind. To predictive 
the speed. The second component is estimating the power generation of the year range from 
one week to whole month. The model can assist the management team to monitor the wind 
farms remotely as well as estimate the power generation in advance. It was established that the 
Gradient boost classifier provides best accuracy for the selected dataset and gives an accuracy 
score of 94.5%. 
CHAPTER-1 
INTRODUCTION 
1.1 Introduction to Machine Learning 
Machine learning involves building mathematical models to help understand data.” 
Learning” enters the fray when we give these models tunable parameters that can be 
adapted to observed data; in this way the program can be considered to be” learning” 
from the data. Once these models have been fit to previously seen data, they can be 
used to predict and understand aspects of newly observed data. At the most 
fundamental level, machine learning can be categorized into two main types: 
supervised learning and unsupervised learning [1]. 
Supervised learning involves somehow modeling the relationship between measured 
features of data and some label associated with the data; once this model is determined, 
it can be used to apply labels to new, unknown data [2]. This is further subdivided into 
classification tasks and regression tasks: in classification, the labels are discrete 
categories, while in regression, the labels are continuous quantities. 
Unsupervised learning involves modeling the features of a dataset without reference to 
any label, and is often described as” letting the dataset speak for it- self.” These models 
include tasks such as clustering and dimensionality reduction. Clustering algorithms 
identify distinct groups of data, while dimensionality reduction algorithms search for 
more succinct representations of the data [3]. 
Semi-supervised learning offers a happy medium between supervised and 
unsupervised learning. During training, it uses a smaller labeled data set to guide 
classification and feature extraction from a larger, unlabeled data set. Semi-supervised 
learning can solve the problem of not having enough labeled data for a supervised 
learning algorithm [4]. It also helps if it’s too costly to label enough data. 
1 
Background 
Unmanaged decision making is current method in wind turbine power generation. But 
most of the time it’s hard to guess the future of nature due to its chaotic nature. But 
it’s not impossible with correct usage of technology with a keen observation and help 
of GBT, we can achieve this difficult task [5]. An active power generation and 
theoretical Power Curves concerning wind speed are presented. 
The recent advancement in machine learning approaches especially deep learning 
models has a breakthrough to solve complex problems. The solution is to make a digital 
twin for the wind turbines and simulate the wind speeds to analyze the outputs as 
datasets to GBT. This method reduces the effort for physical fans and test 
equipment.it is very effective in terms of economy [6]. 
The wind turbine performance varies with the change of season as well geographic 
location. Therefore, the same wind turbine has different performances in different 
months and at various locations [7]. 
Figure 1.1.1: An active power generation and theoretical 
power curves concerning wind speed are presented. 
2 
1.2 Need for Present Study 
The main aim of this project work is to utilizing a 5G-Next Generation-Radio Access 
Network (5G- NG-RAN) assisted cloud-based digital twins’ framework to virtually 
monitor wind turbines and form a predictive model to forecast wind speed and predict 
the generated power. [8] Many researchers have designed various digital twin models 
for predictive maintenance and have contributed significantly to improvements in wind 
energy technology. 
At present, none of the existing digital twins can predict power generation and real- 
time monitoring. Therefore, this study proposes a novel framework to process the 
temporal data stream to forecast the wind speed and predict the generated energy. 
Consequently, it can provide virtual access to the wind turbines 24 by 7 without visiting 
the physical wind farms [9]. While its feedback loop makes the communication back 
and forth with wind turbines for monitoring purposes. 
1.3 Problem Definition 
The wind farms monitoring and power generation prediction is a complex problem due 
to the unpredictability of wind speed. Consequently, it limits the decision power of the 
management team to plan the energy consumption in an effective way. Our proposed 
model solves this challenge by utilizing a 5G-Next Generation-Radio Access 
Network (5G-NG-RAN) assisted cloud-based digital twins’ framework to virtually 
monitor wind turbines and form a predictive model to forecast wind speed and predict 
the generated power [10]. 
It is based on platform as a service (PaaS) to model digital twins and provides digital 
monitoring. The SCADA helps with tasks of Simulation, Monitoring and Data capture. 
The proposed model is very efficient for both monitoring, analysis and prediction. The 
designed machine learning pipeline has two novel components [11]. First, the 
forecasting of wind speed [12]. Second, the processing of wind forecast to predict the 
power generation for a month, including each quarter. 
3 
1.4 Significance of the work 
The model can assist the management team to monitor the wind farms remotely as 
well as estimate the power generation in advance [13]. Main objectives to obtain 
these are summarized as follows 
1. To design and develop an advanced pipeline to predict the power generation that 
can be used for an energy management team to make a timely decision. 
2. First, the forecasting of wind speed. 
3. Second, the processing of wind forecast to predict the power generation 
4 
CHAPTER-2 
LITERATURE SURVEY 
K. G. Logan et.al. [1] titled "Electric and hydrogen rail: Potential contribution to net 
zero in the U.K.," authored by K. G. Logan, 
J. D. Nelson, B. C. McLellan, and A. Hastings. It was published in Transportation 
Research Part D: Transport and Environment, volume 87, in October 2020. The article 
number is 102523. This paper likely explores the potential role of electric and hydrogen- 
powered trains in helping the UK achieve its net-zero emissions goals. 
Y.Wang et.al. [2] titled "Sparse heteroscedastic multiple spline regression models for 
wind turbine power curve modeling," authored by Y. Wang, Y. Li, R. Zou, A. M. Foley, 
D. Al Kez, D. Song, 
Q. Hu, and D. Srinivasan. It was published in the IEEE Transactions on Sustainable 
Energy, volume 12, issue 1, pages 191–201, in January 2021. This paper likely presents 
a methodological approach for modeling wind turbine power curves using sparse 
heteroscedastic multiple spline regression models, which could be valuable for 
optimizing wind energy generation. 
M.Lydia et.al. [3] titled "A comprehensive review on wind turbine power curve 
modeling techniques," authored by 
M. Lydia, S. S. Kumar, A. I. Selvakumar, and G. E. P. Kumar. It was published in the 
Renewable and Sustainable Energy Reviews, volume 30, pages 452–460, in February 
2014. This paper likely provides an overview and analysis of various techniques used 
for modeling wind turbine power curves, offering insights into the state-of-the-art 
methodologies at the time of publication. 
S.Shokrzadeh et.al. [4] titled "Wind turbine power curve modeling using advanced 
parametric and nonparametric methods," authored by S. Shokrzadeh, M. J. Jozani, and 
E. Bibeau. It was published in the IEEE Transactions on 
5 
Sustainable Energy, volume 5, issue 4, pages 1262–1269, in October 2014. This paper 
likely explores the application of advanced parametric and nonparametric methods for 
modeling wind turbine power curves, possibly offering insights into improving the 
accuracy and efficiency of wind energy forecasting or turbine performance evaluation. 
J.C de Albuquerque et.al. [5] titled "Power curve modeling for wind turbine using 
artificial intelligence tools and pre-established inference criteria," authored by J. C. de 
Albuquerque, R. R. B. de Aquino, O. N. Neto, M. M. S. Lira, A. A. Ferreira, and M. A. 
de Carvalho. It was published in the Journal of Modern Power Systems and Clean 
Energy, volume 9, issue 3, pages 526–533, in 2021. This paper likely discusses the 
application of artificial intelligence tools and predefined inference criteria for modeling 
the power curve of wind turbines, which could contribute to more accurate and efficient 
performance prediction and optimization in wind energy systems. 
J. Tautz-Weinert et.al. [6] titled "Using SCADA data for wind turbine condition 
monitoring—A review," authored by J. Tautz-Weinert and S. J. Watson. It waspublished 
in the IET Renewable Power Generation journal, volume 11, issue 4, pages 382–394, 
in 2017. This paper likely offers a comprehensive review of the utilization of SCADA 
(Supervisory Control and Data Acquisition) data for monitoring the condition and 
performance of wind turbines, providing insights into methodologies, challenges, and 
advancements in this field. 
Y. Liu, Z. Wu et.al. [7] titled "Research on fault diagnosis of wind turbine based on 
SCADA data," authored by Y. Liu, Z. Wu, and X. Wang. It was published in IEEE 
Access, volume 8, pages 185557–185569, in 2020. This paper likely presents research 
focused on utilizing SCADA data for the diagnosis of faults in wind turbines, aiming to 
develop methods or algorithms to detect and diagnose issues in wind turbine operation 
based on the data collected through SCADA systems. 
6 
X. Wu et.al. [8] titled "Short-term wind power prediction based on time series analysis 
model," authored by X. Wu, W. Liu, N. Wang, and Y. Ma. It was presented at the 2nd 
International Conference on Computer Science and Electronic Engineering (ICCSEE) in 
2013. This paper likely discusses a methodology for short- term wind power prediction 
using time series analysis models, which could be valuable for energy management and 
grid integration of wind power generation systems. 
H. Sun et.al. [9] titled "Wind turbine power modeling and optimization using artificial 
neural network with wind field experimental data," authored by H. Sun, C. Qiu, L. Lu, 
X. Gao, J. Chen, and H. Yang. It was published in Applied Energy, volume 280, in 
December 2020. The article number is 115880. This paper likely describes the use of 
artificial neural networks (ANNs) to model and optimize wind turbine power output 
based on experimental data obtained from wind field measurements. 
A. Khosravi et.al. [10] titled "Time-series prediction of wind speed using machine 
learning algorithms: A case study Osorio wind farm, Brazil," authored by A. Khosravi, 
L. Machado, and R. O. Nunes. It was published in Applied Energy, volume 224, pages 
550–566, in August 2018. This paper likely presents a case study where machine 
learning algorithms are applied to predict wind speed time-series data, specifically 
focusing on the Osorio wind farm in Brazil. Such research can be valuable for 
improving wind energy forecasting accuracy and enhancing the efficiency of wind 
power generation systems. 
7 
CHAPTER-3 
SYSTEMANALYSIS AND DESCRIPTION 
3.1 EXISTING SYSTEM 
K Nearest Neighbor 
K-Nearest Neighbor is one of the simplest Machine Learning algorithms based on 
Supervised Learning technique. K-NN algorithm assumes the similarity between the 
new case/data and available cases and put the new case into the category that is most 
similar to the available categories. K-NN algorithm stores all the available data and 
classifies a new data point based on the similarity. This means when new data 
appears then it can be easily classified into a well suite category by using K- NN 
algorithm. K-NN algorithm can be used for Regression as well as for Classification 
but mostly it is used for the Classification problems. 
K-NN is a non-parametric algorithm, which means it does not make any assumption 
on underlying data. It is also called a lazy learner algorithm because it does not learn 
from the training set immediately instead it stores the dataset and at the time of 
classification, it performs an action on the dataset. KNN algorithm at the training 
phase just stores the dataset and when it gets new data, then it classifies that data 
into a category that is much similar to the new data. 
Figure 3.1.1: KNN Algorithm 
8 
DISADVANTAGES OF EXISTING SYSTEM 
• Currently, The Wind Power Generation system uses simple assertions based on 
short term analysis of wind speeds, generation rate, cost and profits. 
• The Wind turbines are arranged as per decisions made by analysts. 
• Power is generated and used on daily basis 
• No predictions made about future power generation 
• The existing system is mostly temporal and prevents future predictions 
• There is a high chance that the assumptions made by analysts are inaccurate 
due to unstable weather The winds may be higher on sunny days and lower 
on cool days 
• So, the prediction of power generation seems meaningless based on traditional 
system and the accuracy is low. 
• Also, the companies losing huge amounts of money due to inaccurate 
predictions 
3.2 PROPOSED SYSTEM 
The proposed solution provides virtual access to the wind turbines 24 by 7 without 
visiting the physical wind farms. While its feedback loop makes the communication 
back and forth with wind turbines for monitoring purposes. 
Gradient Boosting Trees 
Gradient Boosting is a popular boosting algorithm in machine learning used for 
classification and regression tasks. Gradient Boosting is a powerful boosting 
algorithm that combines several weak learners into strong learners, in which each 
new model is trained to minimize the loss function such as mean squared error or 
cross-entropy of the previous model using gradient descent. In each iteration, the 
algorithm computes the gradient of the loss function with respect to the predictions 
of the current ensemble and then trains a new weak model to minimize this gradient. 
9 
The predictions of the new model are then added to the ensemble, and the process 
is repeated until a stopping criterion is met. 
The weights of the training instances are not tweaked, instead, each predictor is 
trained using the residual errors of the predecessor as labels. There is a technique 
called the Gradient Boosted Trees whose base learner is CART (Classification and 
Regression Trees). 
Figure 3.2.1: Diagram of proposed Algorithm 
The ensemble consists of M trees. Tree1 is trained using the feature matrix X and 
the labels y. The predictions labeled y1(hat) are used to determine the training 
set residual errors r1. Tree2 is then trained using the feature matrix X and the 
residual errors r1 of Tree1 as labels. The predicted results r1(hat) are then used 
to determine the residual r2. The process is repeated until all the M trees forming 
the ensemble are trained. There is an important parameter used in this technique 
known as Shrinkage. 
Shrinkage refers to the fact that the prediction of each tree in the ensemble is 
shrunk after it is multiplied by the learning rate (eta) which ranges between 0 to 
1. There is a trade-off between eta and the number of estimators, decreasing 
10 
learning rate needs to be compensated with increasing estimators in order to 
reach certain model performance. Since all trees are trained now, predictions can 
be made. Each tree predicts a label and the final prediction is given by the 
formula, 
y(pred) = y1 + (eta * r1) + (eta * r2) + ......... + (eta * rN) 
Gradient boosting regression trees are based on the idea of an ensemble method 
derived from a decision tree. The decision tree uses a tree structure. Starting from 
tree root, branching according to the conditions and heading toward the leaves, the 
goal leaf is the prediction result. This decision tree has the disadvantage of 
overfitting test data if the hierarchy is too deep. As a means to prevent this 
overfitting, the idea of the ensemble method is used for decision trees. 
Figure 3.2.2: Architecture of proposed framework 
11 
Our framework is built over a 5G-Next Generation-Radio Access Network (5G-NG- 
RAN) assisted cloud-based digital twin model for understanding and analyzing wind 
farms. It is a cost- effective solution; hence, digital twins modeling is possible with 
the pay-as-you-go cloud services. The designed machine learning pipeline has two 
novel components i.e., first, the forecasting of wind speed. Second, the processing 
of wind forecast to predict the power generation for a month, including each quarter 
(i.e., medium- term analysis). 
3.3 WORK FLOW OF PROPOSED SYSTEM 
The workflow of the proposed solution for this problem is making a digital twin for 
the wind turbines. This is Nothing but simulation of the actual turbine using a 5G- 
Next Generation- Radio Access Network (5G- NG-RAN). This can process 
previous information about the simulation and predict the future windspeeds. 
The developed model is based on Microsoft Azure digital twins’ infrastructure as a 
5-dimensionaldigital twins’ platform. The 5- Dimensions are all based Supervisory 
Control and Data Acquisition (SCADA). 
It is based on platform as a service (PaaS) to model digital twins and provides digital 
monitoring. The SCADA helps with tasks of Simulation, Monitoring and Data 
capture. The proposed model is very efficient for both monitoring, analysis and 
prediction. The NG-RAN divides gNB into a Control Unit (CU)and a Distributed 
Unit (DU). gNB-CU forms the core of the network handling 5G functions such as 
Access and Mobility Management Function (AMF), User Plane Function (UPF) and 
all the associated Security Functions (SF). The gNB-DU forms the edge part of the 
network interacts with the wind farm through gateways and relays information via 
gNB-CU to the private cloud setup with a virtual (digital twin) wind farm to perform 
predictions. The advantage of using 5G-NG-RAN is that it allows better 
integration of cloud services as wind farms are geographically isolated regions 
than the data centers and can also ensure better coverage with lower latency 
offering more real- time services. 
12 
It also reduces the cost of deployment by reducing the number ofnear-farm data 
centers. Moreover, better resource utilization is attainable if a large amount of data 
from the wind turbines must be shared between the physical and the digital systems. 
Fig 3.3.1: Workflow of the Proposed System 
3.4 DIGITALTWIN MODELLING 
It helps to understand the actual workflow. It offers a real wind farm that is 
connected to its digital twin “virtual wind farm”. Each wind turbine has supervisory 
control and data acquisition unit in a wind farm to provide the data for monitoring. 
The captured data logs are connected with virtual wind turbines with the help of 
digital twins modeling. Our framework processed the data logs to perform predictive 
modeling. It has the ability to report the possible generation of electric power from 
the wind farm in the coming days. 
In the proposed model the wind turbines consist of various physical entities, 
including mechanical devices, monitoring sensors, SCADA units, and activities 
processes. The SCADA unit is considered at Physical Entity level, which is used to 
collect the data for monitoring the behavior of wind turbines. 
13 
Each wind farm has an interface that connects the SCADA unit of wind turbines. 
The entities in the virtual environment represents each SCADA unit to construct the 
wind farm and bond them virtually even if they are physically apart. 
Where, 
ΩDT is digital twins wind farm, 
PE is physical entities, 
VR is virtual representation 
DC is data curation, 
CS is communication scheme 
Ss for services. 
Figure 3.4.1: A knowledge graph of wind farms which are 
connected to monitor the behavior of each wind turbine 
14 
The output presents the wind speed, direction, generated power, and theoretical 
power of the wind turbines. The connected SCADA unit sends the real-time values 
to the digital twin explorer of Microsoft AZURE. And the Digital twins are 
connected to physical entities using a REST API. The proposed framework is fully 
based on cloud computing infrastructure. 
3.5 SOFTWARE DEVELOPMENT LIFE CYCLE 
There are various software development approaches defined and designed which are 
used/employed during development process of software, these approaches are also 
referred as "Software Development Process Models". 
Fig 3.5.1: Software Development Life Cycle 
REQUIREMENTS 
Business requirements are gathered in this phase. This phase is the main focus of 
the project managers and stake holders. Meeting with managers, stake holders and 
users are held in order to determine the requirements. Who is going to use the 
system? How will they use the system? What data should be input into the system? 
What they should be output by the system? These are general questions that get 
answered during a requirement gathering phase. This produces a nice big list of 
functionalities that the system should provide, which describes functions the system 
should perform, business logic that processes data, what data is stored and used by 
the system, and how the user interface should work. 
15 
DESIGN 
The software system design is produced from the results of the requirements phase. 
Architects have the ball in their court during this phase and this is the phase in which 
their focus lies. This is where the details on how the system will work is produced. 
Architecture, including hardware and software, communication, software design 
(UML is produced here) are all part of the deliverables of a design phase. 
IMPLEMENTATION 
Code is produced from the deliverables of the design phase during implementation, 
and this is the longest phase of the software development life cycle. For a developer, 
this is the main focus of the life cycle because this is where the code is produced. 
Implementation my overlap with both the design and testing phases. Many tools 
exist (CASE tools) to actually automate the production of code using information 
gathered and produced during the design phase. 
TESTING 
During testing, the implementation is tested against the requirements to make sure 
that the product is actually solving the needs addressed and gathered during the 
requirements phase. Unit tests and system/acceptance tests are done during this 
phase. Unit tests act on a specific component of the system, while system tests act 
on the system as a whole. 
So, in a nutshell, that is a very basic overview of the general software development 
life cycle model. Now let’s delve into some of the traditional and widely used 
variations. 
STUDY OF THE SYSTEM 
In the flexibility of uses the interface has been developed a graphics concept in 
mind, associated through a browser interface. The GUIs at the top level has been 
categorized as follows: 
• Administrative User Interface Design 
• The Operational and Generic User Interface Design 
16 
The administrative user interface concentrates on the consistent information that is 
practically, part of the organizational activities and which needs proper 
authentication for the data collection. The Interface helps the administration with 
all the transactional states like data insertion, data deletion, and data updating 
along with executive data search capabilities. 
The operational and generic user interface helps the users upon the system in 
transactions through the existing data and required services. The operational user 
interface also helps the ordinary users in managing their own information helps the 
ordinary users in managing their own information in a customized manner as per 
the assisted flexibilities. 
Fig 3.5.2: Study of the System 
17 
3.6 SYSTEM ANALYSIS 
The Systems Development Life Cycle (SDLC), or Software Development Life 
Cycle in systems engineering, information systems and software engineering, is the 
process of creating or altering systems, and the models and methodologies that 
people use to develop these systems. 
In software engineering the SDLC concept underpins many kinds of software 
development methodologies. These methodologies form the framework for 
planning and controlling the creation of an information system the software 
development process. 
SOFTWARE MODEL OR ARCHITECTURALANALYSIS 
Structured project management techniques (such as an SDLC) enhance 
management’s control over projects by dividing complex tasks into manageable 
sections. A software life cycle model is either a descriptive or prescriptive 
characterization of how software is or should be developed. But none of the SDLC 
models discuss the key issues like Change management, Incident management and 
Release management processes within the SDLC process, but it is addressed in the 
overall project management. In the proposed hypothetical model, the concept of 
user-developer interaction in the conventional SDLC model has been converted into 
a three-dimensional model which comprises of the user, owner and the developer. 
In the proposed hypothetical model, the concept of user-developer interaction in the 
conventional SDLC model has been converted into a three-dimensional model 
which comprises of the user, owner and the developer. The one size fits all‖ approach 
to applying SDLC methodologies is no longer appropriate. We have made an 
attempt to address the above-mentioned defects by using a new hypothetical model 
for SDLC described elsewhere. The drawback of addressing these management 
processes under the overall project management is missing of key technical issues 
pertaining to software development process that is, these issues are talked in the 
project management at the surface level but not at the ground level. 
18 
CHAPTER-4 
REQUIREMENTS SPECIFICATION 
4.1 REQUIREMENT ANALYSIS 
The process to gather the software requirements from clients, analyze and document 
them is known as requirements engineering or requirements analysis. The goal of 
requirement engineering is to develop and maintain sophisticated and descriptive 
‘System/Software Requirements Specification’ documents. It is a four-step process 
generally, which includes – 
• Feasibility Study 
• Requirements Gathering 
• Software Requirements Specification 
• Software Requirements Validation 
FUNCTIONAL REQUIREMENT ANALYSIS 
Functional requirements explain what has to be done by identifying the necessary 
task, action or activity that must be accomplished. Functional requirements analysis 
will be used as the top- level functions for functional analysis. 
USER REQUIREMENTS ANALYSIS 
User Requirements Analysis is the process of determining user expectations for a new 
or modified product. These features must be quantifiable, relevant and detailed. The 
main user requirements of our project are as follows: 
● Dataset 
● Operating system 
● Intel i3 preprocessor 
● RAM 4 GB 
● Hard disk 500GB 
● python language and Visual Studio 
19 
NONFUNCTIONAL REQUIREMENTS ANALYSIS 
Non-functional requirements describe the general characteristics of a system. They 
are also known as quality attributes. Some typical non-functional requirements are 
Performance, Response Time, Throughput, Utilization, and Scalability. 
Performance 
The performance of a device is essentially estimated in terms of efficiency, 
effectiveness and speed. 
• Short response time for a given piece of work. 
• High throughput (rate of processing work) 
• Short data transmission time. 
Response Time: 
Response time is the time a system or functional unit takes to react to a given input. 
FEASIBILITY STUDY 
Feasibility Study is a high-level capsule version of the entire process intended to 
answer a number of questions like: What is the problem? Is there any feasible 
solution to the given problem? Is the problem even worth solving? Feasibility study 
is conducted once the problem is clearly understood. Feasibility study is necessary 
to determine that the proposed system is Feasible by considering the technical, 
Operational, and Economical factors. By having a detailed feasibility study the 
management will have a clear-cut view of the proposed system. A well-designed 
feasibility study should provide a historical background of the business or project, 
the operations and management, marketing research and policies, financial data, 
legal requirements and tax obligations. The following feasibilities are considered for 
the project in order to ensure that the project is variable and it does not have any 
major obstructions. Feasibility study encompasses the following things: 
➢ Technical Feasibility 
➢ Operational Feasibility 
20 
In this phase, we study the feasibility of all proposed systems, and pick the best 
feasible solution for the problem. The feasibility is studied based on three main 
factors as follows: 
TECHNICAL FEASIBILITY 
In this step, we verify whether the proposed systems are technically feasible or not. 
i.e., all the technologies required to develop the system are available readily or not. 
Technical Feasibility determines whether the organization has the technology and 
skills necessary to carry out the project and how this should be obtained. The system 
can be feasible because of the following grounds. 
➢ All necessary technology exists to develop the system 
➢ This system is flexible and it can be expanded further 
➢ This system can give guarantee of accuracy, ease of use, and reliability 
➢ Our project is technically feasible because, all the technology 
needed for our project is readily available. 
OPERATIONAL FEASIBILITY 
In this step, we verify different operational factors of the proposed systems like 
manpower, time etc., whichever solution uses less operational resources, is the best 
operationally feasible solution. The solution should also be operationally possible 
to implement. Operational Feasibility determines if the proposed system satisfied 
user objectives could be fitted into the current system operation. 
➢ The clients have been involved in the planning and development of the system. 
➢ The proposed system will not cause any problem under any circumstances. 
➢ The methods of processing and presentation are completely accepted by 
the clients since they can meet all user requirements. 
Our project is operationally feasible because the time requirements and personnel 
requirements are satisfied. 
21 
USER REQUIREMENTS 
1. Execution should be fast 
2. User-friendly 
SOFTWARE REQUIREMENTS 
3. More accurate 
Operating System: Windows 7 and above versions. 
Coding Language: Python. 
Web Server: Flask Platform: Visual Studio 
HARDWARE REQUIREMENTS 
System: Intel Core i3 2.4 GHZ and above. 
Hard Disk: Minimum 500 GB is required. 
RAM: Minimum 4GB is required. 
SRS SPECIFICATION 
Software Requirements specification (SRS) – a requirements specification for a 
software system- is a complete description of behavior of a system to be developed. 
It includes a set of cases that describe all the interactions users will have with the 
software. In addition to use cases, the SRS also contains non- functional 
requirements. Non-functional requirements are requirements which impose 
constraints on the design or implementation (such as performance engineering 
requirements, quality standards, or design constraints). System Requirements 
Specification It is a collection of information that embodies the requirements of a 
system. A business analyst, sometimes titled system analyst, is responsible for 
analyzing the business needs of their clients and stakeholders to help identify 
business problems and propose solutions. Projects are subject to three sorts of 
required elements. Business requirements describe in business terms what must be 
delivered or accomplished to provide value. 
22 
➢ Product requirements describe properties of a system or product 
(which could be one of several ways to accomplish a set of business 
requirements.) 
➢ Process requirements describe activities performed by the developing 
organization. For instance, process requirements could specify 
methodologies that must be followed. 
Product and process requirements are closely linked. Process requirements often 
specify the activities that will be performed to satisfy a product requirement. For 
example, a maximum development cost requirement (a process requirement) may 
be imposed to help achieve a maximum sales price requirement (a product 
requirement) a requirement that the product be maintainable (a product requirement) 
often is addressed by imposing requirements to follow particular development 
styles. A system engineering requirement can be a description of what a system 
must do, referred to as Functional Requirement. This type of requirement specifies 
something that the delivered system must be able to do. Another type of requirement 
specifies something about the system itself, and how well it performs its functions. 
Such requirements are often called Nonfunctional requirements, or ‘Performance 
requirements’ or ‘Quality of service requirements. Examples of such requirements 
include usability, availability, reliability, supportability, testability and 
maintainability. 
A collection of requirements defines the characteristics or features of the desired 
system. A ‘good’ list of requirements Asfar as possible avoids saying how the 
system should implement the requirements, leaving such decisions to the system 
designer. Specifying how the system should be implemented is called 
“implementation bias” or “solution engineering”. However, implementation 
constraints on the solution may validly be expressed by the future owner, for 
example for required interfaces to external systems; for interoperability with other 
systems; and for commonality with other owned products. 
23 
FUNCTIONAL REQUIREMENTS 
The Functional Requirements Specification gives the operations and activities that 
a system must be able to perform. Functional requirements should include functions 
performed by specific screens, outlines of work- flows performed by the system, 
and other business or compliance requirements the system must meet. It also 
depends upon the type of software, expected users and the type of system where the 
software is used. 
NON-FUNCTIONAL REQUIREMENTS 
In systems engineering, a non-functional requirement is a requirement that 
specifies criteria that can be used to judge the operation of a system, rather than 
specific behaviors. They are contrasted with functional requirements that define 
specific behavior or functions. The nonfunctional requirements can be considered 
as quality attributes of a system. 
Reliability: The system should be 90% reliable. 
Efficiency: Based upon the density of vehicles signaling time will be allocated 
Availability: It is available in all the metropolitan cities. 
Maintainability: The system should be optimized for supportability, or ease of 
maintenance as far as possible 
24 
CHAPTER-5 
LANGUAGES OF IMPLEMENTATION 
5. INTRODUCTION TO PYTHON SCRIPT 
What is a script? 
Up to this point, I have concentrated on the interactive programming capability of 
Python. This is a very useful capability that allows you to type in a program and to 
have it executed immediately in an interactive mode. 
Scripts are reusable? 
Basically, a script is a text file containing the statements that comprise a Python 
program. Once you have created the script, you can execute it over and over without 
having to retype it each time. 
Scripts are editable 
Perhaps, more importantly, you can make different versions of the script by 
modifying the statements from one file to the next using a text editor. Then you can 
execute each of the individual versions. In this way, it is easy to create different 
programs with a minimum amount of typing. 
You will need a text editor 
Just about any text editor will suffice for creating Python script files. 
DIFFERENCE BETWEEN A SCRIPT AND A PROGRAM 
Script 
Scripts are distinct from the core code of the application, which is usually written in 
a different language, and are often created or at least modified by the end-user. 
Scripts are often interpreted from source code or byte code, whereas the 
applications they control are traditionally compiled to native machine code. 
25 
Program 
The program has an executable form that the computer can use directly to execute 
the instructions. The same program in its human-readable source code form, from 
which executable programs are derived (e.g.,compiled) 
PYTHON 
What is Python? 
Chances you are asking yourself this. You may have found this book because you 
want to learn to program but don’t know anything about programming languages. 
Or you may have heard of programming languages like C, C++, C#, or Java and 
want to know what Python is and how it compares to “big name” languages. 
Hopefully I can explain it for you. 
PYTHON CONCEPTS 
If you’re not interested in the how’s and whys of Python, feel free to skip to the next 
chapter. In this chapter I will try to explain to the reader why I think Python is one 
of the best languages available and why it’s a great one to start programming with. 
● Open-source general-purpose language. 
● Object Oriented, Procedural, Functional 
● Easy to interface with C/ObjC/Java/Fortran 
● Easy-Ish to interface with C++ (via SWIG) 
Python is a high-level, interpreted, interactive and object-oriented scripting 
language. Python is designed to be highly readable. It uses English keywords 
frequently where as other languages use punctuation, and it has fewer syntactical 
constructions than other languages. 
● Python is Interpreted − Python is processed at runtime by the 
interpreter. You do not need to compile your program before executing 
it. This is similar to PERL and PHP. 
26 
● Python is Interactive − You can actually sit at a Python prompt and interact 
with the interpreter directly to write your programs. 
● Python is Object-Oriented − Python supports Object-Oriented style or 
technique of programming that encapsulates code within objects. 
● Python is a Beginner's Language − Python is a great language for the 
beginner-level programmers and supports the development of a wide range 
of applications from simple text processing to WWW browsers to games. 
HISTORY OF PYTHON 
● Python was developed by Guido van Rossum in the late eighties and early 
nineties at the NationalResearch Institute for Mathematics and Computer 
Science in the Netherlands. 
● Python is derived from many other languages, including ABC, Modula-3, C, 
C++, Algol- 68, SmallTalk, and Unix shell and other scripting languages. 
● Python is copyrighted. Like Perl, Python source code is now available under 
the GNU General PublicLicense (GPL). 
● Python is now maintained by a core development team at the institute, although 
Guido van Rossum still holds a vital role in directing its progress. 
PYTHON FEATURES 
Easy-to-learn − Python has few keywords, simple structure, and a clearly defined 
syntax. This allows the student to pick up the language quickly. 
Easy-to-read − Python code is more clearly defined and visible to the eyes. 
Easy-to-maintain − Python's source code is fairly easy-to-maintain. 
A broad standard library − Python's bulk of the library is very portable and 
cross- platform compatible on UNIX, Windows, and Macintosh. 
Interactive Mode − Python has support for an interactive mode which allows 
interactive testing and debugging of snippets of code. 
27 
Portable − Python can run on a wide variety of hardware platforms and has the 
same interface on all platforms. 
Extendable − You can add low-level modules to the Python interpreter. These 
modules enable programmers to add to or customize their tools to be more 
efficient. 
Databases − Python provides interfaces to all major commercial databases. 
GUI Programming − Python supports GUI applications that can be created and 
ported to many system calls, libraries and windows systems, such as Windows 
MFC, Macintosh, and the X Window system of Unix. 
Scalable − Python provides a better structure and support for large programs than 
shell scripting. Apart from the above-mentioned features, Python has a big list of 
good features, few are listed below: 
● It supports functional and structured programming methods as well as OOP. 
● It can be used as a scripting language or can be compiled to byte-code for 
buildinglarge applications. 
● It provides very high-level dynamic data types and supports dynamic type 
checking. 
● It supports automatic garbage collection. 
DYNAMIC V/S STATIC 
Types Python is a dynamic-typed language. Many other languages are static typed, 
such as C/C++ and Java. A static typed language requires the programmer to 
explicitly tell the computer what type of “thig” each data value is. 
For example, in C if you had a variable that was to contain the price of something, 
you would have to declare the variable as a “float” type. This tells the compiler that 
the only data that can be used for that variable must be a floating-point number, i.e., 
a number with a decimal point. If any other data value was assigned to that variable, 
the compiler would give an error when trying to compile the program. 
28 
However, Python doesn’t require this. You simply give your variables names and 
assign values to them. The interpreter takes care of keeping track of what kinds of 
objects your program is using. This also means 26 that you can change the size of 
the values as you develop the program. Say you have another decimal number (a.k.a. 
a floating-point number) you need in your program. With a static typed language, 
you have to decide the memory size the variable can take when you first initialize 
that variable. A double is a floating-point value that can handle a much larger 
number than a normal float (the actual memory sizes depend on the operating 
environment). If you declare a variable to be a float but later on assign a value that 
is too big to it, your program will fail; you will have to go back and change that 
variable to be a double. With Python, it doesn’t matter. You simply give it 
whatever number you want and Python will take care of manipulating it as needed. 
It even works for derived values. 
For example, say you are dividing two numbers. One is a floating-point number 
and one is an integer. Python realizes that it’s more accurate to keep track of 
decimals so it automatically calculates the result as a floating-point number. 
VARIABLES 
Variables are nothing but reserved memory locations to store values. This means 
that when you create a variable you reserve some space in memory. 
Based on the data type of a variable, the interpreter allocates memory and decides 
what can be stored in the reserved memory. Therefore, by assigning different data 
types to variables, you can store integers, decimals or characters in these variables. 
STANDARD DATA TYPES 
The data stored in memory can be of many types. For example, a person's age is 
stored as a numeric value and his or her address is stored as alphanumeric 
characters. Python has various standard data types that are used to define the 
operations possible on them and the storage method for each of them. 
29 
Python has five standard data types: 
● Numbers 
● String 
● List 
● Tuple 
● Dictionary 
PYTHON NUMBERS 
Number data types store numeric values. Number objects are created when you assign 
a value to them. 
PYTHON STRINGS 
Strings in Python are identified as a contiguous set of characters represented in the 
quotation marks. Python allows for either pairs of single or double quotes. Subsets 
of strings can be taken using the slice operator ([ ] and [:]) with indexes starting at 
0 in the beginning of the string and working their way from - 1 at the end. 
PYTHON LISTS 
Lists are the most versatile of Python's compound data types. A list contains items 
separated by commas and enclosed within square brackets ([]). To some extent, lists 
are similar to arrays in C. One difference between them is that all the items 
belonging to a list can be of different data type. 
The values stored in a list can be accessed using the slice operator ([ ] and [:]) with 
indexes starting at 0 in the beginning of the list and working their way to end -1. 
The plus (+) sign is the list concatenation operator, and the asterisk (*) is the 
repetition operator. 
30 
PYTHON TUPLES 
A tuple is another sequence data type that is similar to the list. A tuple consists of a 
number of values separated by commas. Unlike lists, however, tuples are enclosed 
within parentheses. The main differences between lists and tuples are: Lists are 
enclosed in brackets ( [ ] ) and their elements and size can be changed, while tuples 
are enclosed in parentheses ( ( ) ) and cannot be updated. Tuples can be thought of 
as read-only lists. 
PYTHON DICTIONARY 
Python's dictionaries are kind of hash table type. They work like associative 
arrays or hashes found in Perl and consist of key-value pairs. A dictionary key can 
be almost any Python type, but are usually numbers or 28 strings. Values, on the 
other hand, can be any arbitrary Python object. Dictionaries are enclosed by curly 
braces ({ }) and values can be assigned and accessed using square braces ([]). 
DIFFERENT MODES IN PYTHON 
Python has two basic modes: 
1. Normal 
The normal mode is the mode where the scripted and finished .py files are run in the 
Python interpreter. 
2. Interactive 
Interactive mode is a command line shell which gives immediate feedback for each 
statement, while running previously fed statements in active memory. As new lines 
are fed into the interpreter, the fed program is evaluated both in part and in whole. 
31 
PYTHON LIBRARIES ARE 
Requests 
The most famous http library written by kennethreitz. It’s a must have for every python 
developer. 
Scarpy 
If you are involved in web scraping then this is a must have library for you. After 
using this library, you won’t use any other. 
wxPython 
A Gui toolkit for python. I have primarily used it in place of tkinter. You will really 
love it. 
Pillow 
A friendly fork of PIL (Python Imaging Library). It is more user friendly than PIL and 
is a must have for anyone who works with images. 
SQLAlchemy 
A database library. Many love it and many hate it. The choice is yours. 
Beautiful Soup 
I know it’s slow but this xml and html parsing library is very useful for beginners. 
Twisted 
The most important tool for any network application developer. It has a very 
beautiful Api and is used by a lot of famous python developers. 
NumPy 
How can we leave this very important library? It provides some advance math 
functionalities to python. 
32 
Matplotlib 
A numerical plotting library. It is very useful for any data scientist or any data analyzer. 
Pygame 
Which developer does not like to play games and develop them? This library will 
help you achieve your goal of 2d game development. 
Pyglet 
A 3d animation and game creation engine. This is the engine in which the famous 
python port of mine-craft was made. 
pyQT 
A GUI toolkit for python. It is my second choice after wxpython for developing 
GUIs for my python scripts. 
pyGtk 
Another python GUI library. It is the same library in which the famous BitTorrent client 
is created. 
Scapy 
A packet sniffer and analyzer for python made in python. 
Pywin32 
A python library which provides some useful methods and classes for interacting with 
windows. 
nltk 
Natural Language Toolkit – I realize most people won’t be using this one, but it’s 
generic enough. It is a very useful library if you want to manipulate strings. But its 
capacity is beyond that. Do check it out. 
nose 
A testing framework for python. It is used by millions of python developers. 
33 
SymPy 
SymPy can do algebraic evaluation, differentiation, expansion, complex numbers, etc. 
It is contained in a pure Python distribution. 
IPython 
It just can’t stress enough how useful this tool is. It is a python prompt on steroids. 
It has completion, history, shell capabilities, and a lot more. Make sure that you take 
alook at it. 
Numpy 
NumPy’s main object is the homogeneous multidimensional array. It is a table of 
elements (usually numbers), all of the same type, indexed by a tuple of positive 
integers. In NumPy dimensions are called axes. The number of axes is rank. 
● Offers Matlab-ish capabilities within Python 
● Fast array operations 
● 2D arrays, multi-D arrays, linear algebra etc. 
Matplotlib 
High quality plotting library. 
PYTHON MODULES 
Python allows us to store our code in files (also called modules). This is very useful 
for more serious programming, where we do not want to retype a long function 
definition from the very beginning just to change one mistake. In doing this, we are 
essentially defining our own modules, just like the modules defined already in the 
Python library. 
To support this, Python has a way to put definitions in a file and use them in a script 
or in an interactive instance of the interpreter. Such a file is called a module; definitions 
from a module can be imported into other modules or into the main module. 
34 
TESTING CODE 
● As indicated above, code is usually developed in a file using an editor. 
● To test the code, import it into a Python session and try to run it. 
● Usually there is an error, so you go back to the file, make a correction 
● This process is repeated until you are satisfied that the code works. 
● The entire process is known as the development cycle. 
● There are two types of errors that you will encounter. 
● Syntax errors occur when the form of some command is invalid. 
● This happens when you make typing errors such as misspellings 
● Python will always give an error message for a syntax error. 
FUNCTIONS IN PYTHON 
It is possible, and very useful, to define our own functions in Python. Generally 
speaking, if you need to do a calculation only once, then use the interpreter. But 
when you or others have need to perform a certain type of calculation many times, 
then define a function. 
You use functions in programming to bundle a set of instructions that you want to 
use repeatedly or that, because of their complexity, are better self-contained in a 
sub-program and called when needed. That means that a function is a piece of code 
written to carry out a specified task. 
To carry out that specific task, the function might or might not need multiple inputs. 
When the task is carried out, the function can or cannot return one or more values. 
There are three types of functions in python: 
help (), min (), print (). 
PYTHON NAMESPACE 
Generally speaking, a namespace (sometimes also called a context) is a naming 
system for making names unique to avoid ambiguity. Everybody knows a name- 
35 
spacing system from daily life, i.e. the naming of people in first name and family 
name (surname). 
An example is a network: each network device (workstation, server, printer, ...) 
needs a unique name and address. Yet another example is the directory structure of 
file systems. 
Some namespaces in Python: 
global names of a module 
local names in a function or method invocation 
built-in names: this namespace contains built-in functions (e.g.,abs (), cmp(), ...) 
and built-in exception names 
GARBAGE COLLECTION 
Garbage Collector exposes the underlying memory management mechanism of 
Python, the automatic garbage collector. The module includes functions for 
controlling how the collector operates and to examine the objects known to the 
system, either pending collection or stuck in reference cycles and unable to be freed. 
PYSPARK API 
PySpark is the Python API for Apache Spark. It enables you to perform real-time, 
large-scale data processing in a distributed environment using Python. It also 
provides a PySpark shell for interactively analyzing your data. 
PySpark combines Python’s learnability and ease of use with the power of Apache 
Spark to enable processing and analysis of data at any size for everyone familiar 
with Python. 
PySpark supports all of Spark’s features such as Spark SQL, DataFrames, 
Structured Streaming, Machine Learning (MLlib) and Spark Core. 
36 
FLASK WEB SERVER 
Flask is a lightweight WSGI web application framework. It is designed to make 
getting started quick and easy, with the ability to scale up to complex 
applications. It began as a simple wrapper and has become one of the most 
popular Python web application frameworks. 
Flask offers suggestions, but doesn't enforce any dependencies or project layout. 
It is up to the developer to choose the tools and libraries they want to use. There 
are many extensions provided by the community that make adding new 
functionality easy. 
37 
CHAPTER-6 
SYSTEM DESIGN 
Software design sits at the technical kernel of the software engineering process and 
is applied regardless of the development paradigm and area of application. 
Design is the first step in the development phase for any engineered product or 
system. The designer’s goal is to produce a model or representation of an entity 
that will later be built. Beginning, once system requirement has been specified and 
analyzed, system design is the first of the three technical activities -design, code 
and test that is required to build and verify software. 
The importance can be stated with a single word “Quality”. Design is the place 
where quality is fostered in software development. Design provides us with 
representations of software that can assess for quality. Design is the only way that 
we can accurately translate a customer’s view into a finished software productor 
system. Software design serves as a foundation for all the software engineering steps 
that follow. Without a strong design we risk building an unstable system – one that 
will be difficult to test, one whose quality cannot be assessed until the last stage. 
The purpose of the design phase is to plan a solution of the problem specified by the 
requirement document. 
This phase is the first step in moving from the problem domain to the solution 
domain. In other words, starting with what is needed, design takes us toward how to 
satisfy the needs. The design of a system is perhaps the most critical factor affection 
the quality of the software; it has a major impact on the later phase, particularly 
testing, maintenance. The output of this phase is the design document. This 
document is similar to a blueprint for the solution and is used later during 
implementation, testing and maintenance. The design activity is often divided into 
two separate phases System Design and Detailed Design. 
38 
System Design also called top-level design aims to identify the modules that should 
be in the system, the specifications of these modules, and how they interact with 
each other to produce the desired results. At the end of the system design all the 
major data structures, file formats, output formats, and the major modules in the 
system and their specifications are decided. During, Detailed Design, the internal 
logic of each of the modules specified in system design is decided. During this 
phase, the details of the data of a module is usually specified in a high-level design 
description language, which is independent of the target language in which the 
software will eventually be implemented. 
In system design the focus is on identifying the modules, whereas during detailed 
design the focus is on designing the logic for each of the modules. In other works, 
in system design the attention is on what components are needed, while in detailed 
design how the components can be implemented in software is the issue. 
Design is concerned with identifying software components specifying relationships 
among components. Specifying software structure and providing blue print for the 
document phase. Modularity is one of the desirable properties of large systems. It 
implies that the system is divided into several parts. In such a manner, the interaction 
between parts is minimal clearly specified. During the system design activities, 
Developers bridge the gap between the requirements specification, produced during 
requirements elicitation and analysis, and the system that is delivered to the user. 
Design is the place where the quality is fostered in development. Software design is 
a process through which requirements are translated into a representation of 
software. 
DATA FLOW DIAGRAMS 
A graphical tool used to describe and analyze the moment of data through a system 
manual or automated including the process, stores of data, and delays in the system. 
Data Flow Diagrams are the central tool and the basis from which other components 
are developed. The transformation of data from input to output, through processes, 
may be described logically and independently of the physical components 
associated with the system. 
39 
A data flow diagram (DFD) maps out the flow of information for any process or 
system. It uses defined symbols like rectangles, circles and arrows, plus short text 
labels, to show data inputs, outputs, storage points and the routes between each 
destination. Data flowcharts can range from simple, even hand-drawn process 
overviews, to in-depth, multi-level DFDs that dig progressively deeper into how the 
data is handled. They can be used to analyze an existing system or model a new one. 
DFDs are the model of the proposed system. They clearly should show the 
requirements on which the new system should be built. Later during design activity 
this is taken as the basis for drawing the system’s structure charts. The Basic 
Notation used to create a DFD’s are as follows: 
1. Dataflow: Data move in a specific direction from an origin to a destination. 
2. Process: People, procedures, or devices that use or produce (Transform) Data. 
3. Source: External sources or destination of data, which may be People, 
programs, organizations or other entities. 
4. Data Store: Here data are stored or referenced by a process in the System. 
40 
What is a UML Class Diagram? 
Class diagrams are the backbone of almost every object-oriented method 
including UML. They describe the static structure of a system. 
Basic Class Diagram Symbols and Notations 
Classes represent an abstraction of entities with common characteristics. 
Associations represent the relationships between classes. Illustrate classes with 
rectangles divided into compartments. Place the name of the class in the first 
partition (centered, bolded, and capitalized), list the attributes in the second 
partition, and write operations into the third. 
Visibility 
Use visibility markers to signify who can access the information contained within a 
class. Private visibility hides information from anything outside the class partition. 
Public visibility allows all other classes to view the marked information. Protected 
visibility allows child classes to access information they inherited from a parent 
class. 
41 
Associations 
Associations represent static relationships between classes. Place association names 
above, on, or below the association line. Use a filled arrow to indicate the direction 
of the relationship. Place roles near the end of an association. Roles represent the 
way the two classes see each other. 
Note: It's uncommon to name both the association and the class roles. 
Multiplicity (Cardinality) 
Place multiplicity notations near the ends of an association. These symbols indicate 
the number of instances of one class linked to one instance of the other class. For 
example, one company will have one or more employees, but each employee 
worksfor one company only. 
42 
Constraint 
Place constraints inside curly braces {}. 
Composition and Aggregation 
Composition is a special type of aggregation that denotes a strong ownership 
between Class A, the whole, and Class B, its part. Illustrate composition with a 
filled diamond. Use a hollow diamond to represent a simple aggregation 
relationship, in which the "whole" class plays a more important role than the "part" 
class, but the two classes are not dependent on each other. The diamond end in both 
a composition and aggregation relationship points toward the "whole" class or the 
aggregate. 
43 
Generalization 
Generalization is another name for inheritance or an "is a" relationship. It refers to 
a relationship between two classes where one class is a specialized version of 
another. For example, Honda is a type of car. So, the class Honda would have a 
generalization relationship with the class car. 
Use Case Diagram 
Use case diagrams model the functionality of a system using actors and use cases. 
Use cases are services or functions provided by the system to its users. 
Basic Use Case Diagrams Symbols and Notations System 
Draw your system's boundaries using a rectangle that contains use cases. Place 
actors outside the system’s boundaries. 
44 
Use Case 
Draw use cases using ovals. Label with ovals with verbs that represent the system's 
functions. 
Actors 
Actors are the users of a system. When one system is the actor of another system, 
label the actor system with the actor stereotype. 
Relationships 
Illustrate relationships between an actor and a use case with a simple line. For 
relationships among use cases, use arrows labeled either "uses" or "extends." A 
"uses" relationship indicates that one use case is needed by another in order to 
perform a task. An "extends" relationship indicates alternative options under a 
certain use case. 
45 
Sequence diagram 
Sequence diagrams describe interactions among classes in terms of an exchange of 
messages over time. 
Basic Sequence Diagram 
Symbols and Notations 
Class roles 
Class roles describe the way an object will behave in context. Use the UML object 
symbol to illustrate class roles but, don't list object attributes. 
Activation 
Activation boxes represent the time an object needs to complete a task. 
46 
Messages 
Messages are arrows that represent communication between objects. Use half- 
arrowed lines to represent asynchronous messages. Asynchronous messages are sent 
from an object that will not wait for a response from the receiver before continuing 
its tasks. 
Various types of Sequence and 
Collaboration Diagrams Lifelines 
Lifelines are vertical dashed lines that indicate the object's presence over time. 
Destroying Objects 
Objects can be terminated early using an arrow labeled "<< destroy >>" that points 
to an X. 
47 
Loops 
A repetition or loop within a sequence diagram is depicted as a rectangle. Place the 
condition for exiting the loop at the bottom left corner in square brackets []. 
Activity Diagram 
An activity diagram illustrates the dynamic nature of a system by modeling the flow 
of control from activity to activity. An activity represents an operation on some class 
in the system that results in a change in the state of the system. Typically, activity 
diagrams are used to model workflow or business processes and internal operation. 
Because an activity diagram is a special kind of state chart diagram, it uses some 
of the same modeling conventions. 
48 
Basic Activity Diagram 
Symbols and Notations 
Action States 
Action states represent the non-interruptible actions of objects. You can draw an 
action state in Smart Draw using a rectangle with rounded corners. 
Action Flow 
Action flow arrows illustrate the relationships among action states. 
Object Flow 
Object flow refers to the creation and modification of objects by activities. An object 
flow arrow from an action to an object means that the action creates or influences 
the object. An object flow arrow from an object to an action indicates that the action 
state uses the object. 
Initial State 
A filled circle followed by an arrow represents the initial action state. 
49 
Final State 
An arrow pointing to a filled circle nested inside another circle represents the final 
action state. 
Branching 
A diamond represents a decision with alternate paths. The outgoing alternates 
should be labeled with a condition or guard expression. You can also label one 
ofthe paths "else. 
Synchronization 
A synchronization bar helps illustrate parallel transitions. Synchronization is also 
called forking and joining. 
50 
State chart Diagram 
A state chart diagram shows the behavior of classes in response to external stimuli. 
This diagram models the dynamic flow of control from state to state within a 
system. 
States 
States represent situations during the life of an object. You can easily illustrate a 
state in Smart Draw by using a rectangle with rounded corners. 
Transition 
A solid arrow represents the path between different states of an object. Label the 
transition with the event that triggered it and the action that results from it. 
Synchronization and Splitting of Control 
A short heavy bar with two transitions entering it represents a synchronization of 
control. A short heavy bar with two transitions leaving it represents a splitting of 
control that creates multiple states. 
51 
Component Diagram 
Component 
A component is a physical building block of the system. It is represented as a 
rectangle with tabs. Learn how to resize grouped objects like components. 
Interface 
An interface describes a group of operations used or created by components. 
Dependencies 
Draw dependencies among components using dashed arrows. Learn about line styles 
in Smart-Draw. 
52 
Deployment Diagram 
Component 
A node is a physical resource that executes code components. Learn how to 
resize grouped objects like nodes. 
Association 
Association refers to a physical connection between nodes, such as Ethernet. Learn 
how to connect two nodes. 
Components and Nodes 
Place components inside the node that deploys them. 
53 
6.2 UML Diagrams Overview 
Fig 6.2.1: UML diagrams Overview 
54 
UML combines best techniques from data modeling (entity relationship diagrams), 
business modeling (work flows), object modeling, and component modeling. It 
can be used with all processes, throughout the software development life cycle, 
and across different implementation technologies. UML has synthesized the 
notations of the Booch method, the Object-modeling technique (OMT) and Object- 
oriented software engineering (OOSE) by fusing them into a single, common and 
widely usable modeling language. UML aims to be a standard modeling language 
which can model concurrent and distributed systems. 
Design phase 
Design is a multi-step process that focuses on data structure, Software architecture, 
procedural details and interface between modules. The design process also 
translates the requirements into the presentation of software that can be 
accessed for quality before coding begins. 
Computer software design changes continuously as new methods; better analysis 
and broader understanding evolved. Software design at a relatively early stage in its 
revolution. Therefore, software design methodology lacks the depth, flexibility and 
quantitative nature that are normally associated with more classical engineering 
disciplines. However, the techniques for software design do exist, criteria for design 
qualities are available and design notation can be applied. 
The purpose of the design phase is to plan a solution of the problem specified by the 
requirements document. The design of a system is perhaps the most critical factor 
affecting the quality of the software. It has a major impact on the project during later 
phases, particularly during testing and maintenance. 
Design phase purpose 
Software design sits at the technical kernel of the software engineering process and 
is applied regardless of the development paradigm and area of application. 
Design is the first step in the development phase for any engineered product or 
system. The designer’s goal is to produce a model or representation of an entity that 
will later be 
55 
built. Beginning, once the system requirements have been specified and analyzed, 
system design is the first of the three technical activities design, code and test that 
is required to build and verify software. 
The importance can be stated with a single word “Quality”. Design is the place 
where quality is fostered in software development. Design provides a 
representation of software that can be accessed for quality. Design is the only way 
that can accurately translate a customer’s view into a finished software product or 
system. Software design serves as a foundation for all the software engineering 
steps that follow. Without a strong design, we risk building an unstable system that 
will be difficult to test. One whose quality cannot be assessed until the last stage. 
During design, progressive refinement of data structure, program structure, and 
procedural details are developed, reviewed and documented. System design can be 
viewed from either technical or project management perspective. From the technical 
point of view, design is comprised of four activities- architectural design, data 
structure design, interface design and procedural design. The design model is an 
abstraction of the implementation of the system. It is used to conceive as well as 
document the design of the software system. It is a comprehensive, composite 
artifact encompassing all design classes, subsystems, packages, collaborations, and 
the relationships between them. 
Design Concepts 
The set of fundamental software design concepts are as follows: 
1. Abstraction 
The lower level of abstraction provides a more detailed description of the 
solution. A sequence of instruction that contains a specific and limited function 
refers to a procedural abstraction. A collection of data that describes a data object 
is a data abstraction. 
2. Architecture 
The complete structure of the software is known as software architecture. 
Structure provides conceptual integrity for a system in a number of ways. The 
architecture is the structure of program modules where they interact with each 
56 
other in a specialized way. The aim of the software design is to obtain an 
architectural framework of a system. 
3. Patterns 
A design pattern describes a design structure and that structure solves a particular 
design problem in a specified content. 
4. Modularity 
Modularity is the single attribute of software that permits a program to be 
managed easily. 
5. Information hiding 
Modules must be specified and designed so that the information like algorithm 
and data presented in a module is not accessible for other modules not requiring 
that information. 
6. Functional independence 
Functional independence is the concept of separation and related to the concept of 
modularity, abstraction and information hiding. The functional independence is 
accessed using two criteria i.e. Cohesion and coupling. 
Cohesion is an extension of the information hiding concept. A cohesive module 
performs a single task and it requires a small interaction with the other components 
in other parts of the program. Coupling is an indication between modules in a 
structure of software. 
1. Refinement 
Refinement is a top-down design approach. It is a process of elaboration. A 
program is established for refining levels of procedural details. 
2. Refactoring 
Refactoring is the process of changing the software system in a way that it does 
not change the external behavior of the code and still improves its internal 
structure. 
3. Design classes 
The model of software is defined as a set of design classes. Every class describes 
the elements of the problem domain and that focus on features of the problem. 
57 
Design Constraints 
Design Constraints are generally the limitations on a design. They include 
imposed limitations that you don't control and limitations that are self-imposed as 
a way to improve a design. The following are common types of design constraints. 
9 Types of Design Constraints: 
Commercial Constraints 
Basic commercial constraints such as time and budget come under commercial 
constraints. 
Requirements 
Requirements specify the basic needs of a project. Ex: Functional requirements. 
Non-Functional Requirements 
Non-Functional requirements are the requirements that specify intangible elements 
of a design. 
Compliance 
Compliance refers to applicable laws, regulations and standards. 
Style 
A style guide or multiple style guides related to an organization, brand, product, 
service, environment or project. For example, a product development team may 
follow a style guide for a brand family that constrains the colors and layout of 
package designs. 
Sensory Design 
Beyond visual design, constraints may apply to taste, touch, sound and smell. For 
example, a brand identity that calls for products to smell fruity. 
Usability 
Usability principles imply frameworks and standards. Ex: The principle of least 
astonishment. 
58 
Principles 
Principles include the design principles of an organization, team or individual. 
For example, a designer who uses form follows function to constrain designs. 
Integration 
A design that needs to work with other things such as products, services, 
systems, processes, controls, partners and information. 
Conceptual Design 
Conceptual Design is an early phase of the design process, in which the broad 
outlines of function and form of something are articulated. It includes the design 
of interactions, experiences, processes and strategies. It involves an understanding 
of people's needs - and how to meet them with products, services, & processes. 
Common artifacts of conceptual design are concept sketches and models. The 
unified modeling language allows the software engineer to express an analysis 
model using the modeling notation that is governed by a set of syntactic, semantic 
and pragmatic rules. 
A UML system is represented using five different views that describe the system 
from a distinctly different perspective. Each view can be defined by a set of 
diagrams. UML is specifically constructed through two different domains. They 
are: 
➢ UML analysis modeling, this focuses on the user model and structural model 
views of the system. 
➢ UML design modeling, which focuses on the behavioral modeling, 
implementation modeling and environment model view 
59 
Use Case Diagram 
Use-case diagrams describe the high-level functions and scope of a system. These 
diagrams also identify the interactions between the system and its actors. The use 
cases and actors in use-case diagrams describe what the system does and how the 
actors use it, but not how the system operates internally 
Fig 6.2.2: Use Case Diagram 
60 
Sequence Diagram 
A sequence diagram in Unified Modeling Language (UML) is a kind of interaction 
diagram that shows how processes operate with one another and in what order. It is 
a construct of a Message Sequence Chart. A sequence diagram shows, as parallel 
vertical lines ("lifelines"), different processes or objects that live simultaneously, 
and, as horizontal arrows, the messages exchanged between them, in the order in 
which they occur. This allows the specification of simple runtime scenarios in a 
graphical manner. 
Fig 6.2.3: Sequence Diagram 
Collaboration Diagram 
A collaboration diagram shows that the order of messages that implement an 
operation or a transaction. Collaboration diagrams show objects, their links, and 
their messages. They can also contain simple class instances and class utility 
61 
instances. Each collaboration diagram provides a view of the interactions or 
structural relationships that occur between objects and object like entities in the 
current model. Collaboration diagrams and sequence diagrams are called interaction 
diagrams. A collaboration diagram shows that the order of messages that 
implement an operation or a transaction. Collaboration diagrams show objects, 
their links, and their messages. They can also contain simple class instances and 
class utility instances. Each collaboration diagram provides a view of the 
interactions or structural relation- ships that occur between objects and object like 
entities in the current model. 
The second interaction diagram is the collaboration diagram. It shows the object 
organization as seen in the following diagram. In the collaboration diagram, the 
method call sequence is indicated by some numbering technique. The number 
indicates how the methods are called one after another. We have taken the same 
order management system to describe the collaboration diagram. Method calls are 
similar to that of a sequence diagram. However, difference being the sequence 
diagram does not describe the object organization, whereas the collaboration 
diagram shows the object organization. 
To choose between these two diagrams, emphasis is placed on the type of 
requirement. If the time sequence is important, then the sequence diagram is used. 
If organization is required, then collaboration diagram is used. interaction diagrams 
are used to describe the dynamic nature of a system. Now, we will look into the 
practical scenarios where these diagrams are used. To understand the practical 
application, we need to understand the basic nature of sequence and collaboration 
diagram. 
Sequence diagrams are used to capture the order of messages flowing from one 
object to another. Collaboration diagrams are used to describe the structural 
organization of the objects taking part in the interaction. A single diagram is not 
sufficient to describe the dynamic aspect of an entire system, so a set of diagrams 
62 
are used to capture it as a whole. Interaction diagrams are used when we want to 
understand the message flow and the structural organization. Message flow means 
the sequence of control flow from one object to another. Structural organization 
means the visual organization of the elements in a system 
Fig 6.2.4: Collaboration Diagram 
Component Diagram 
Component Diagrams show the dependencies between software components in the 
system. The nature of these dependencies will depend on the language or languages 
used for the development and may exist at compile-time or at run time. Component 
diagrams are one of the two types of implementation diagram in UML. Component 
diagrams show these dependencies between software components in the system. 
Stereotypes can be used to show dependencies that are specific to particular 
languages also. A component diagram shows the allocation of classes and objects 
to components in the physical design of a system. 
Fig 6.2.5: Component Diagram 
63 
Class Diagram 
A class is used to represent various objects. It is used to define the properties and 
operations of an object. In UML, we can also represent an abstract class. A class 
whose functionalities are not defined is called an abstract class. Any UML class 
diagram notations are generally expressed as below UML class diagrams example. 
Fig 6.2.6: Class Diagram 
Deployment Diagram 
The second type of implementation diagram provided by UML is the deployment 
diagram. Deployment diagrams are used to show the configuration of run-time 
processing elements and the software components and processes that are located on 
them. 
Deployment diagrams are made up of nodes and communication associations. 
Nodes are typically used to show computers and the communication associations 
show the network and protocols that are used to communicate between nodes. Nodes 
can be used to show other processing resources such as people or mechanical 
resources. Nodes are drawn as 3D views of cubes or rectangular prisms, and the 
following figure shows a simplest deployment diagram where the nodes connected 
by communication associations 
64 
Fig 6.2.7: Deployment Diagram 
Algorithmic Design 
Step-1: Import the dataset 
Step-2: Explore the data 
Step-3: Preprocess the data 
Step-4: Split the data into attributes and labels 
Step-5: Divide the data into training and testing 
Step-6: Train GBT Model 
Step-7: Make prediction 
Step-8: Evaluate the results of the algorithm 
65 
CHAPTER-7 
IMPLEMENTATION 
7.1 Code Implementation - Back End 
from flask import Flask, request, render_template 
from pyspark.sql import SparkSession 
from pyspark.ml.feature import VectorAssembler 
from pyspark.ml.regression import GBTRegressor 
from pyspark.ml.evaluation import RegressionEvaluator 
from pyspark.sql.functions import substring 
from pyspark.sql.types import IntegerType 
import os 
app = Flask(  name  ) 
@app.route("/", methods=["GET", "POST"]) 
def index(): 
spark = 
SparkSession.builder.master("local").appName("wind_turbine_project").conf 
ig("spark.ui.port", "4041").getOrCreate() 
spark_df = spark.read.csv('T1.csv', header=True, inferSchema=True) 
spark_df = spark_df.withColumn("month", substring("date/time", 4, 
2).cast(IntegerType())) 
spark_df = spark_df.withColumn("hour", substring("date/time", 12, 
2).cast(IntegerType())) 
spark_df = spark_df.withColumn("day", substring("date/time", 12, 
2).cast(IntegerType())) 
spark_df = spark_df.withColumn('activepower', spark_df['lv activepower (kw)']) 
variables = ['month', 'hour', 'Wind Speed (m/s)', 'Wind Direction (°)'] 
vectorAssembler = VectorAssembler(inputCols=variables, outputCol='features') 
va_df = vectorAssembler.transform(spark_df) 
splits = va_df.randomSplit([0.8, 0.2]) 
66 
train_df = splits[0] 
test_df = splits[1] 
gbt_model = GBTRegressor(featuresCol='features', labelCol='activepower') 
gbt_model = gbt_model.fit(train_df) 
predictions = gbt_model.transform(test_df) 
train_count = train_df.count() 
test_count = test_df.count() 
predictions_df = predictions.select('activepower', 'prediction').toPandas() 
evaluator_r2 = RegressionEvaluator(labelCol='activepower', 
predictionCol='prediction', metricName='r2') 
r2 = evaluator_r2.evaluate(predictions) 
if request.method == "POST": 
n = int(request.form.get("n")) 
predictions_df = predictions_df.sample(n, random_state=42) 
else: 
predictions_df = predictions_df.sample(10) 
return render_template("output.html", train_count=train_count, 
test_count=test_count, predictions_df=predictions_df, r2=r2) 
if name == "  main  ": 
os.system("start chrome.exe --guest --start-maximized http://127.0.0.1:5000") 
app.run(debug=True) 
7.2 Code Implementation - Front End 
<!DOCTYPE html> 
<html> 
<head> 
<title>Output</title> 
<meta charset="UTF-8"> 
<style> 
* { 
font-family: 'Lato', sans-serif; 
} 
body { 
background-color: #F0F4F8; 
67 
color: #2C3E50; 
} 
h1 { 
font-family: 'Roboto', sans-serif; 
font-size: 36px; 
margin: 20px; 
} 
p { 
font-size: 18px; 
margin: 10px; 
} 
form { 
margin: 20px; 
} 
label { 
font-weight: bold; 
} 
input[type=number] { 
width: 80px; 
padding: 5px; 
border: 1px solid #2C3E50; 
} 
input[type=submit] { 
width: 120px; 
padding: 10px; 
border: none; 
background-color: #18BC9C; 
color: white; 
cursor: pointer; 
} 
input[type=submit]:hover { 
background-color: #16A085; 
} 
table { 
margin: 20px; 
border-collapse: collapse; 
} 
th, td { 
padding: 10px; 
border: 1px solid #2C3E50; 
68 
} 
th { 
background-color: #E74C3C; 
color: white; 
} 
@media (max-width: 768px) { 
h1 { 
font-size: 24px; 
} 
p { 
font-size: 16px; 
} 
input[type=number] { 
width: 60px; 
} 
input[type=submit] { 
width: 100px; 
} 
} 
</style> 
</head> 
<body> 
<h1>Output from Digital Twin:</h1> 
<p>Train dataset: {{ train_count }}</p> 
<p>Test dataset: {{ test_count }}</p> 
<form method="POST"> 
<label for="n">Enter the number of samples:</label> 
<input type="number" id="n" name="n" min="1" max="100" required> 
<input type="submit" value="Show Samples"> 
</form> 
<p>Accuracy on test data: {{ r2*100 }} %</p> 
<table> 
<tr> 
<th>Active Power</th> 
<th>Prediction</th> 
</tr> 
{% for row in predictions_df.itertuples() %} 
<tr> 
<td>{{ row.activepower }}</td> 
<td>{{ row.prediction }}</td> 
69 
</tr> 
{% endfor %} 
</table> 
</body> 
</html> 
Fig 7.2.1: Output Interface 
7.3 Dataset 
A publicly available onshore wind farm dataset is used for this experiment. These 
wind turbines are equipped with a SCADA unit and four measurements are 
reported at 10 minutes intervals. 
1. Active power 
2. Wind speed 
3. Wind direction 
4. Theoretical power 
5. Date / Time 
The SCADA unit have the ability to store retrieve and exports the data for a 
variety of stakeholders. 
70 
Table 1: The wind turbine with data collection information 
Monthly dataset 
Fig 7.3.1: Dataset Details 
71 
7.4 EXISTING VS PROPOSED MODEL 
Fig 7.4.1: KNN vs GBT 
Using the K-Nearest Neighbors (KNN) algorithm yielded an accuracy of 92%, while 
employing Gradient Boosted Trees (GBT) resulted in a higher accuracy of 94.5%. 
This suggests that the GBT model outperforms KNN by a margin of 2.5 percentage 
points in terms of accuracy. 
7.5 METRICS CALUCLATED 
Metrics are used to evaluate the efficiency of various machine learning algorithms. 
The training process is followed by a validation process that is used to measure the 
performance of the model and in particular its ability to generalize to (input, output) 
features that were not used in training the model. 
72 
R2 Score 
R-squared is a statistical measure that represents the goodness of fit of a 
regression model. The ideal value for r-square is 1. The closer the value of r- 
square to 1, the better is the model fitted. R-square is a comparison of the residual 
sum of squares (SSres) with the total sum of squares(SStot). The total sum of 
squares is calculated by summation of squares of perpendicular distance between 
data points and the average line. 
Where; 
73 
CHAPTER-8 
SYSTEM TESTING 
The purpose of testing is to discover errors. Testing is the process of trying to 
discover every conceivable fault or weakness in a work product. It provides a way 
to check the functionality of components, sub- assemblies, assemblies and/or a 
finished product It is the process of exercising software with the intent of ensuring 
that the Software system meets its requirements and user expectations and does not 
fail in an unacceptable manner. There are various types of tests. Each test type 
addresses a specific testing requirement. 
8.1 TYPES OF TESTS 
UNIT TESTING 
Unit testing involves the design of test cases that validate that the internal program 
logic is functioning properly, and that program inputs produce valid outputs. All 
decision branches and internal code flow should be validated. It is the testing of 
individual software units of the application .it is done after the completion of an 
individual unit before integration. This is a structural testing, that relies on 
knowledge of its construction and is invasive. Unit tests perform basic tests at 
component level and test a specific business process, application, and/or system 
configuration. Unit tests ensure that each unique path of a business process performs 
accurately to the documented specifications and contains clearly defined inputs 
and expected results. 
INTEGRATION TESTING 
Integration tests are designed to test integrated software components to determine if 
they actually run as one program. Testing is event driven and is more concerned 
with the basic outcome of screens or fields. Integration tests demonstrate that 
although the components were individually satisfaction, as shown by successfully 
unit testing, the combination of components is correct and consistent. Integration 
testing is specifically aimed at exposing the problems that arise from the 
combination of components. 
74 
FUNCTIONAL TESTING 
Functional tests provide systematic demonstrations that functions tested are 
available as specified by the business and technical requirements, system 
documentation, and user manuals. 
Functional testing is centered on the following items: 
Valid Input 
Invalid Input  
Functions  
Output 
: identified classes of valid input must be accepted. 
: identified classes of invalid input must be rejected. 
: identified functions must be exercised. 
: identified classes of application outputs must be exercised. 
Systems/Procedures: interfacing systems or procedures must be invoked. 
Organization and preparation of functional tests is focused on requirements, key 
functions, or special test cases. In addition, systematic coverage pertaining to 
identify Business process flows; data fields, predefined processes, and successive 
processes must be considered for testing. Before functional testing is complete, 
additional tests are identified and the effective value of current tests is determined. 
SYSTEM TESTING 
System testing ensures that the entire integrated software system meets 
requirements. It tests a configuration to ensure known and predictable results. An 
example of system testing is the configuration- oriented system integration test. 
System testing is based on process descriptions and flows, emphasizing pre-driven 
process links and integration points. 
WHITE BOX TESTING 
White Box Testing is a testing in which in which the software tester has knowledge 
of the inner workings, structure and language of the software, or at least its purpose. 
It is purpose. It is used to test areas that cannot be reached from a black box level. 
75 
BLACK BOX TESTING 
Black Box Testing is testing the software without any knowledge of the inner 
workings, structure or language of the module being tested. Black box tests, as most 
other kinds of tests, must be written from a definitive source document, such as 
specification or requirements document, such as specification or requirements 
document. It is a testing in which the software under test is treated, as a black box. 
You cannot “see” into it. The test provides inputs and responds to outputs without 
considering how the software works. 
UNIT TESTING 
Unit testing is usually conducted as part of a combined code and unit test phase of 
the software lifecycle, although it is not uncommon for coding and unit testing to be 
conducted as two distinct phases. 
8.2 TEST STRATEGY AND APPROACH 
Field testing will be performed manually and functional tests will be written in detail. 
TEST OBJECTIVES 
• All field entries must work properly. 
• Pages must be activated from the identified link. 
• The entry screen, messages and responses must not be delayed. 
FEATURES TO BE TESTED 
• Verify that the entries are of the correct format 
• No duplicate entries should be allowed 
• All links should take the user to the correct page. 
76 
INTEGRATION TESTING 
Software integration testing is the incremental integration testing of two or more 
integrated software components on a single platform to produce failures caused by 
interface defects. The task of the integration test is to check that components or 
software applications, e.g., components in a software system or – one step up – 
software applications at the company level – interact without error. 
Test Results: All the test cases mentioned above passed successfully. No defects 
encountered. 
1) Top-Down Integration 
This method is an incremental approach to the construction of program structure. 
Modules are integrated by moving downward through the control hierarchy, 
beginning with the main program module. The module subordinates to the main 
program module are incorporated into the structure in either a depth first or 
breadth first manner. In this method, the software is tested from main module and 
individualstubs are replaced when the test proceeds downwards. 
2) Bottom-up Integration 
This method begins the construction and testing with the modules at the lowest level 
in the program structure. Since the modules are integrated from the bottom up, 
processing required for modules subordinate to a given level is always available and 
the need for stubs is eliminated. The bottom-up integration strategy may be 
implemented with the following steps 
• The low-level modules are combined into clusters into clusters that perform a 
specific Software sub-function. 
• A driver (i.e.) the control program for testing is written to coordinate test case 
input and output. 
• The cluster is tested. 
• Drivers are removed and clusters are combined moving upward in the program 
structure 
77 
The bottom-up approaches test each module individually and then each module is 
module is integrated with a main module and tested for functionality. 
8.3 OTHER TESTING METHODOLOGIES 
USER ACCEPTANCE TESTING 
User Acceptance of a system is the key factor for the success of any system. The 
system under consideration is tested for user acceptance by constantly keeping in 
touch with the prospective system users at the time of developing and making 
changes wherever required. The system developed provides a friendly user interface 
that can easily be understood even by a person who is new to the system. 
OUTPUT TESTING 
After performing the validation testing, the next step is output testing of the 
proposed system, since no system could be useful if it does not produce the required 
output in the specified format. Asking the users about the format required by them 
tests the outputs generated or displayed by the system under consideration. Hence 
the output format is considered in 2 ways – one is on screen and another in printed 
format. 
VALIDATION CHECKING 
Validation checks are performed on the following fields. 
Text Field 
The text field can contain only the number of characters lesser than or equal to its 
size. The text fields are alphanumeric in some tables and alphabetic in other 
tables. Incorrect entry always flashes and error message. 
Numeric Field 
The numeric field can contain only numbers from 0 to 9. An entry of any character 
flashes an error message. The individual modules are checked for accuracy and what 
it has to perform. Each module is subjected to test run along with sample data. The 
individually tested modules are integrated into a single system. Testing involves 
78 
executing the real data information is used in the program the existence of any 
program defect is inferred from the output. The testing should be planned so that all 
the requirements are individually tested. A successful test is one that gives out the 
defects for the inappropriate data and produces and output revealing the errors in the 
system. 
Preparation of Test Data 
Taking various kinds of test data does the above testing. Preparation of test data 
plays a vital role in the system testing. After preparing the test data the system under 
study is tested using that test data. 
Using Live Test Data 
Live test data are those that are actually extracted from organization files. After a 
system is partially constructed, programmers or analysts often ask users to key in a 
set of data from their normal activities. Then, the systems person uses this data as a 
way to partially test the system. In other instances, programmers or analysts extract 
a set of live data from the files and have them entered themselves. 
It is difficult to obtain live data in sufficient amounts to conduct extensive testing. 
And, although it is realistic data that will show how the system will perform for the 
typical processing requirement, assuming that the live data entered are in fact 
typical, such data generally will not test all combinations or formats that can enter 
the system. This bias toward typical values then does not provide a true system test 
and in fact ignores the cases most likely to cause system failure. 
Using Artificial Test Data 
Artificial test data are created solely for test purposed, since they can be generated 
to test all combinations of formats and values. In other words, the artificial data, 
which can quickly be prepared by a data generating utility program in the 
information systems department, making possible the testing of all login and control 
paths through the programs. The most effective test programs use artificial test data 
generated by persons other than those who wrote the programs. 
79 
8.4 USER TRAINING 
Whenever a new system is developed, user training is required to educate them 
about the working of the system so that it can be put to efficient use by those for 
whom the system has been primarily designed. 
For this purpose, the normal working of the project was demonstrated to the 
prospective users. Its working is easily understandable and since the expected 
users are people who have good knowledge of computers, the use of this system is 
very easy. 
8.5 MAINTAINENCE 
This covers a wide range of activities including correcting code and design errors. 
To reduce the need for maintenance in the long run, we have more accurately 
defined the user’s requirements during the process of system development. 
Depending on the requirements, this system has been developed to satisfy the needs 
to the largest possible extent. With development in technology, it may be possible 
to add many more features based on the requirements in future. The coding and 
designing are simple and easy to understand which will make maintenance easier. 
8.6 TESTING STRATEGY 
A strategy for system testing integrates system test cases and design techniques into 
a well-planned series of steps that results in the successful construction of software. 
The testing strategy must co-operate test planning, test case design, test execution, 
and the resultant data collection and evaluation. A strategy for software testing must 
accommodate low-level tests that are necessary to verify that a small source code 
segment has been correctly implemented as well as high level tests that validate 
major system functions against user requirements. Software testing is a critical 
element of software quality assurance and represents the ultimate review of 
specification design and coding. 
80 
SYSTEM TESTING 
Software once validated must be combined with other system elements (e.g., 
Hardware, people, database). System testing verifies that all the elements are 
proper and that overall system function performance is achieved. It also tests to 
find discrepancies between the system and its original objective, current 
specifications and system documentation. 
UNIT TESTING 
In unit testing different are modules are tested against the specifications produced 
during the design for the modules. Unit testing is essential for verification of the 
code produced during the coding phase, and hence the goals to test the internal logic 
of the modules. Using the detailed design description as a guide, important Conrail 
paths are tested to uncover errors within the boundary of the modules. This testing 
is carried out during the programming stage itself. 
Table 2: Test cases 
ID CASE 
INPUT EXPECTED 
ACTUAL 
1 
Positive 
value 
20 
Display 20 samples 
RESULT 
Displayed 20 
samples 
2 
Negative 
value -20 
Shows error 
Message: Value 
must be greater than 
or equal to 1 
Success 
Displayed error 
Message: Value 
must be greater 
than or equal to 1 
3 
Above 100 
101 
Shows error 
Message: Value 
must be less than or 
equal to 100 
Success 
Shows error 
Message: Value 
must be less than 
or equal to 100 
4 
Below 100 
20 
Display 20 samples 
Success 
Displayed 20 
samples 
Success 
81 
CHAPTER-9 
CONCLUSION 
9 . CONCLUSION 
The wind-turbines condition monitoring and power generation predictive play an 
essential role in supporting the management team in making informed decisions. 
The team developed a 5G-NG-RAN assisted cloud based digital twin framework to 
monitor the SCADA units of wind turbines. The digital twins enabled real-time 
monitoring of wind farms without visiting them physically. 5G-NG-RAN assisted 
cloud allows low latency services to support digital twin in real-time for predictive 
modeling in wind turbines. Furthermore, GBT regression to forecast wind and 
power generation. The empirical evaluation of the publicly available dataset 
confirms the applicability in real wind- farms scenarios. 
82 
CHAPTER-10 
FUTURE ENHANCEMENT 
10. FUTURE ENHANCEMENT 
Future plan of this project is to extend this digital twin’s framework for offshore 
wind farms monitoring and prediction to support sustainable energy solutions. 
Focus on improving the interpretability of machine learning models used in the 
digital twin. This can enhance trust and understanding among operators and 
engineers, leading to better-informed decision-making. 
83 
CHAPTER-11 
BIBLIOGRAPHY 
REFERENCES 
1. K. G. Logan, J. D. Nelson, B. C. McLellan, and A. Hastings, ‘‘Electric and 
hydrogen rail: Potential contribution to net zero in the U.K.,’’ Transp. Res. D, 
Transp. Environ., vol. 87, Oct. 2020, Art. no. 102523. 
2. 
Y. Wang, Y. Li, R. Zou, A. M. Foley, D. Al Kez, D. Song, Q. Hu, and D. 
Srinivasan, ‘‘Sparse heteroscedastic multiple spline regression models for wind 
turbine power curve modeling,’’ IEEE Trans.Sustain. Energy, vol. 12, no. 1, pp. 
191–201, Jan. 2021. 
3. 
M. Lydia, S. S. Kumar, A. I. Selvakumar, and G. E. P. Kumar, ‘‘A 
comprehensive review on wind turbine power curve modeling techniques,’’ 
Renew. Sustain. Energy Rev., vol. 30, pp. 452–460, Feb. 2014. 
4. S. Shokrzadeh, M. J. Jozani, and E. Bibeau, ‘‘Wind turbine power curve 
modeling using advanced parametric and nonparametric methods,’’ IEEE Trans. 
Sustain. Energy, vol. 5,no. 4, pp. 1262–1269, Oct. 2014. 
5. J. C. de Albuquerque, R. R. B. de Aquino, O. N. Neto, M. M. S. Lira, A. A. 
Ferreira, and M. A. de Carvalho, ‘‘Power curve modelling for wind turbine using 
artificial intelligence tools and pre- established inference criteria,’’ J. Modern Power Syst. 
Clean Energy, vol. 9, no. 3, pp. 526–533, 2021. 
6. 
J. Tautz-Weinert and S. J. Watson, ‘‘Using SCADA data for wind turbine 
condition monitoring—Areview,’’ IET Renew. Power Gener., vol. 11, no. 4, pp. 
382–394, 2017. 
7. Y. Liu, Z. Wu, and X. Wang, ‘‘Research on fault diagnosis of wind turbine 
based on SCADA data,’’IEEE Access, vol. 8, pp. 185557–185569, 2020. 
8. 
X. Wu, W. Liu, N. Wang, and Y. Ma, ‘‘Short-term wind power prediction 
based on time series analysis model,’’ in Proc. 2nd Int. Conf. Comput. Sci. 
Electron. Eng. (ICCSEE), 2013. 
9. 
H. Sun, C. Qiu, L. Lu, X. Gao, J. Chen, and H. Yang, ‘‘Wind turbine power 
modelling and optimization using artificial neural network with wind field 
84 
experimental data,’’ Appl. Energy, vol. 280, Dec. 2020, Art. no. 115880. 
10. 
A. Khosravi, L. Machado, and R. O. Nunes, ‘‘Time-series prediction of 
wind speed using machinelearning algorithms: A case study Osorio wind farm, 
Brazil,’’Appl. Energy, vol. 224, pp. 550–566, Aug. 2018. 
11. 
Y. Hu, Y. Qiao, J. Liu, and H. Zhu, ‘‘Adaptive confidence boundary 
modeling of wind turbine power curve using SCADA data and its application,’’ 
IEEE Trans. Sustain. Energy, vol. 10, no. 3, pp. 1330–1341, Jul. 2019. 
12. 
Y. Wu, K. Zhang, and Y. Zhang, ‘‘Digital twin networks: A survey,’’ IEEE 
Internet Things J., vol. 8, no.18, pp. 13789–13804, Sep. 2 
13. 
L. Lei, G. Shen, L. Zhang, and Z. Li, ‘‘Toward intelligent cooperation of 
UAV swarms: When machinelearning meets digital twin,’’ IEEE Netw., vol. 35, 
no. 1, pp. 386–392, Jan. 2021. 
14. 
J. Lopez, J. E. Rubio, and C. Alcaraz, ‘‘Digital twins for intelligent 
authorization in the B5G-enabledsmart grid,’’ IEEE Wireless Commun., vol. 28, 
no. 2, pp. 48–55, Apr. 2021. 
15. 
W. Sun, H. Zhang, R. Wang, and Y. Zhang, ‘‘Reducing offloading latency 
for digital twin edge networks in 6G,’’ IEEE Trans. Veh. Technol., vol. 69, no. 10, pp. 
12240–12251, Oct. 2020. 
16. 
Y. 
Lu, X. Huang, K. Zhang, S. Maharjan, and Y. Zhang, 
‘‘Communicationefficient federated learning for digital twin edge networks in 
industrial IoT,’’ IEEE Trans. Ind. Informat., vol. 17, no. 8, pp. 5709– 5718, Aug. 
2021.E 
17. 
A. Ghasempour, ‘‘Internet of Things in smart grid: Architecture, 
applications, services, key technologies, and challenges,’’ Inventions, vol. 4, no. 
1, p. 22, Mar. 2019. 
18. O. O. Olatunji, P. A. Adedeji, N. Madushele, and T.-C. Jen, ‘‘Overview of 
digital twin technology in wind turbine fault diagnosis and condition monitoring,’’ 
in Proc. IEEE 12th Int. Conf. Mech. Intell. Manuf.Technol. (ICMIMT), May 2021, 
pp. 201–207. 
85 
19. K. Sivalingam, M. Sepulveda, M. Spring, and P. Davies, ‘‘A review and 
methodology development forremaining useful life prediction of offshore fixed 
and floating wind turbine power converter with digital twin technology 
perspective,’’ in Proc. 2nd Int. Conf. Green Energy Appl. (ICGEA), Mar. 2018, 
pp. 197– 204. 
20. J. Kim, D. G. Duguma, P. V. Astillo, H.-Y. Park, B. Kim, I. You, and V. 
Sharma, ‘‘A formally verified security scheme for Inter-gNBDU handover in 5G 
vehicle-to-everything,’’ IEEE Access, vol. 9, pp. 119100–119117, 2021. 
21. F. Tao, M. Zhang, Y. Liu, and A. Y. C. Nee, ‘‘Digital twin driven prognostics 
and health management for complex equipment,’’ CIRP Ann., vol. 67, no. 1, pp. 
169–172, 2018. 
22. F. Tao, Q. Qi, L. Wang, and A. Nee, ‘‘Digital twins and cyber–physical 
systems toward smart manufacturing and industry 4.0: Correlation and 
comparison,’’ Eng. Forthcoming, vol. 5, no. 4, pp. 653–661, 2019. 
23. P. Lara-Benítez, M. Carranza-García, J. M. Luna-Romera, and J. C. 
Riquelme, ‘‘Temporal convolutional networks applied to energyrelated time series 
forecasting,’’ Appl. Sci., vol. 10, no. 7, p. 2322, Mar. 2020. 
24. R. Goyal, P. Chandra, and Y. Singh, ‘‘Suitability of KNN regression in the 
development of interaction based software fault prediction models,’’ IERI Proc., 
vol. 6, pp. 15–21, Jan. 2014. 
25. B. Erisen. (2018). Wind Turbine SCADA Dataset. [Online]. Available: 
https://www.kaggle.com/berkerisen/wind-turbine-scada-dataset 
86 
87 
88 
89 