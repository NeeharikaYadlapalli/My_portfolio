A MINI PROJECT REPORT 
ON 
DETECTION OF FAKE AND CLONE ACCOUNTS IN TWITTER USING 
CLASSIFICATION AND DISTANCE MEASURE ALGORITHMS 
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
Under the esteemed guidance of 
Dr. K.V.S.S. Rama Krishna 
Associate Professor 
DEPARTMENT OF INFORMATION TECHNOLOGY 
(20NN1A1263) 
(20NN1A1210)  
(20NN1A1227) 
(20NN1A1258) 
(20NN1A1237) 
VIGNAN’S NIRULA INSTITUTE OF TECHNOLOGY AND SCIENCE FOR WOMEN 
(Approved by AICTE, NEW DELHI and Affiliated to JNTUK) 
PEDAPALAKALURU, GUNTUR-522005 (2020-2024) 
VIGNAN’S NIRULA INSTITUTE OF TECHNOLOGY AND SCIENCE FOR WOMEN 
(Approved by AICTE, NEW DELHI and Affiliated to JNTUK) 
PEDAPALAKALURU, GUNTUR-522005 
(2020-2024) 
DEPARTMENT OF INFORMATION TECHNOLOGY 
CERTIFICATE 
This is to certify that the project work entitled “DETECTION OF FAKE AND CLONE ACCOUNTS 
IN TWITTER USING CLASSIFICATION AND DISTANCE MEASURE ALGORITHMS “is a 
bonafide work submitted by Y Neeharika (20NN1A1263), D Madhu Varsha(20NN1A1210), K 
Vedavathi (20NN1A1227), S Deekshitha (20NN1A1258) and M Fouzia (20NN1A1237)from the 
department of Information Technology in the partial fulfillment of the requirements forward of degree 
of Bachelor of Technology in Information Technology from Vignan’s Nirula Institute of Technology & 
Science for Women, Guntur. 
Internal Guide                                                                                            
Dr. K.V.S.S. Rama Krishna                                                                      
External Examiner 
Head of the Department 
Dr. K.V.S.S. Rama Krishna 
DECLARATION 
We hereby declare that the work described in this project work, entitled “DETECTION OF FAKE 
AND CLONE ACCOUNTS IN TWITTER USING CLASSIFICATION AND DISTANCE 
MEASURE ALGORITHMS” which is submitted by us in partial fulfillment for the award of Bachelor 
of Technology in the department of Information Technology to the Vignan’s Nirula Institute of 
Technology & Science for women, affiliated to Jawaharlal Nehru Technological University Kakinada, 
Andhra Pradesh, is the result of work done by us under the esteemed guidance of Dr. K.V.S.S Rama 
Krishna, Associate Professor. 
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
We profoundly grateful to express our deep sense of gratitude and respect towards our honorable 
chairman, LAVU RATHAIAH sir, Chairman of Vignan group for his precious support in the college. 
We are much thankful to DR.P. RADHIKA, Principal VNITSW, Guntur, for her support during and 
till the completion of the project. 
We would like to thank DR. K.V.S.S Rama Krishna, Associate Professor and Head of the 
Department of Information Technology, for his extended and continuous support, valuable guidance 
and timely advices in the completion of this project thesis. 
We wish to express our profound sense of sincere gratitude to our Project Guide, DR. K.V.S.S Rama 
Krishna, Associate Professor of Information Technology, without whose help, guidance and 
motivation this project thesis could not have been completed the project successfully. 
We also thank all the faculty of the Department of Information Technology for their help and guidance 
of numerous occasions, which has given us the cogency to build-up adamant aspiration over the 
completion of our project thesis and finally, we thank one and all who directly or indirectly helped us 
to complete our project thesis successfully. 
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
System Analysis and Description  
3 
Requirement Specification  
4 
Languages of Implementation  
5 
System Design  
6 
Implementation  
7 
System Testing  
8 
Conclusion  
9 
Future Enhancement  
10 
Bibliography  
LIST OF FIGURES 
Figure 
Fig 2.1.1 
Description 
Decision Tree 
Fig 2.2.1 
Fig 2.2.2 
Complexity of SVM 
Fig 2.2.3 
Multilayer Perceptron 
Fig 2.2.4         
Hyperplanes classification 
Fig 2.3.1 
Illustration of Linearly Separable Mapping 
Fig 2.4.1 
Software Development Life Cycle 
Fig 5.1.1 
Study of the System 
Fig 5.1.2 
UML diagrams Overview 
Fig 5.1.3 
Use Case Diagram 
Fig 5.1.4 
Sequence Diagram 
Fig5.1.5 
Activity Diagram 
Fig 6.1.1 
System Architecture 
Fig 6.1.2 
Code Screenshot 
Fig 6.1.3 
Code Screenshot 
Fig 6.1.4 
Login Service Provider Interface 
Fig 6.1.5 
Remote Users Interface 
Fig 6.1.6 
Dataset Details 
Fig 6.1.7 
Interface for searching the dataset details 
Fig 6.1.8 
Viewing of all Fake Account details 
Fig 6.1.9 
Viewing of all Remote Users 
Fig 6.1.10 
Viewing of Clone accounts 
Viewing of Tweet Score Results 
LIST OF TABLES 
Table  
Description 
Table 1 
Table 1: Test case of Login Page 
ACRONYMS 
• OSN-Online Social Network 
• CART-Classification and Regression Tree Algorithm 
• SVM-Support Vector Machines 
• SRM-Structural Risk Minimization 
• ERM- Empirical Risk Minimization 
• Multilayer perceptron (MLP)    
• RBF-Radial Basis Function 
• SDLC-Software Development Life Cycle 
• GUI-Graphical User Interface 
• UML-Unified Modeling Language 
ABSTRACT 
Online Social Network (OSN) is a network hub where people with similar interests or real-world 
relationships interact. As the popularity of OSN is increasing, the security and privacy issues related to 
it are also rising. Fake and Clone profiles are creating dangerous security problems to social network 
users. Cloning of user profiles is one serious threat, where already existing user's details are stolen to 
create duplicate profiles and then it is misused for damaging the identity of original profile owner. Fake 
profile is the creation of profile in the name of a person or a company which does not really exist in 
social media, to carry out malicious activities. To address this issue, this project presents a novel 
approach for the detection of fake and clone accounts on Twitter, leveraging a combination of 
classification and distance measure algorithms. 
 
 
 
 
 
 
 
                   CHAPTER-1 
              INTRODUCTION 
 
  
CHAPTER-1 
INTRODUCTION 
1.1 Introduction 
ONLINE Social Networks (OSN) like Face book, Twitter, LinkedIn, Instagram etc. are used by billions 
of users all around the world to build network connections. The ease and accessibility of social 
networks have created a new era of networking. OSN users share a lot of information in the network 
like photos, videos, school name, college name, phone numbers, email address, home address, family 
relations, bank details, career details etc. This information if put into hands of attackers, the after 
effects are very severe. Most of the OSN users are unaware of the security threats that exist in the 
social networks and easily fall prey to these attacks. The risks are more dangerous if the victims are 
children. In Profile Cloning attack, the profile information of existing users is stolen to create duplicate 
profiles and these profiles are misused for spoiling the identity of original profile owner. There are two 
types of Profile Cloning namely - Same Site and Cross Site Profile Cloning. If user credentials are 
taken from one Network to create a clone profile in same Network, then it is called Same Site profile 
cloning. 
In Cross Site profile cloning, attacker takes the user information from one Network to create a 
duplicate profile in other Network in which the user is not having any account. As the registration 
process in social networks have become very simple in order to attract more and more users, the 
creation of fake profiles is also increasing in an alarming rate. An attacker creates a fake profile in 
order to connect to a victim to cause malicious activities. And also, to spread fake news and spam 
messages. In recent years, machine learning techniques, specifically classification algorithms, coupled 
with sophisticated distance measure algorithms, have emerged as powerful tools in the battle against 
fake and clone accounts on Twitter. Classification algorithms, such as Random Forest, Support Vector 
Machines, and Neural Networks, enable the automatic categorization of accounts based on various 
features.  
Additionally, distance measure algorithms like Jaccard Similarity, Cosine Similarity, and Euclidean 
Distance play a vital role in assessing the similarity between user profiles, tweets, and overall online 
behavior. By measuring the distance between different accounts, these algorithms can unveil subtle 
patterns that might be indicative of fraudulent activities. This research aims to delve deep into the 
realm of identifying fake and clone Twitter accounts by synergizing the capabilities of classification 
algorithms and distance measure techniques. By leveraging the rich dataset provided by Twitter, 
encompassing user metadata, tweet content, and network interactions, our study explores innovative 
methods to distinguish genuine accounts from deceptive ones. 
By advancing our understanding of these sophisticated detection methods, we not only contribute to 
the ongoing research in cybersecurity but also provide valuable insights for social media platforms, law 
enforcement agencies, and users to identify and combat the ever-evolving landscape of fake and clone 
Twitter accounts. Through this research, we aim to bolster the trustworthiness of online interactions, 
ensuring a safer and more reliable digital space for all users. 
CHAPTER-2 
SYSTEM ANALYSIS 
AND DESCRIPTION 
CHAPTER-2 
SYSTEM ANALYSIS AND DESCRIPTION 
2.1 EXISTING SYSTEM 
Decision Tree is a Supervised learning technique that can be used for both classification and 
Regression problems, but mostly it is preferred for solving Classification problems. It is a tree
structured classifier, where internal nodes represent the features of a dataset, branches represent the 
decision rules and each leaf node represents the outcome. 
In a Decision tree, there are two nodes, which are the Decision Node and Leaf Node. Decision nodes 
are used to make any decision and have multiple branches, whereas Leaf nodes are the output of those 
decisions and do not contain any further branches. The decisions or the test are performed on the basis 
of features of the given dataset. 
It is called a decision tree because, similar to a tree, it starts with the root node, which expands on 
further branches and constructs a tree-like structure. In order to build a tree, we use the CART 
algorithm, which stands for Classification and Regression Tree algorithm. A decision tree simply asks a 
question, and based on the answer (Yes/No), it further split the tree into subtrees. 
Fig 2.1.1: Decision Tree 
DISADVANTAGES OF EXISTING SYSTEM 
• Decision trees tend to be highly flexible and can capture intricate details in the training data. This 
can lead to overfitting 
• Small changes in the data can result in a completely different tree structure. This high variance 
makes decision trees sensitive to noise in the data, leading to instability in the model's predictions. 
• Most decision tree algorithms do not handle missing data well.  
• Decision trees consider features independently when making splits. Complex relationships 
between features might not be captured effectively. 
2.2 PROPOSED SYSTEM 
Support Vector Machine was first heard in 1992, introduced by Boser, Guyon, and Vapnik in COLT-92. 
SVM s are a set of related supervised learning methods used for classification and regression. 
Support Vector machines can be defined as systems which use hypothesis space of a linear 
functions in a high dimensional feature space, trained with a learning algorithm from optimization 
theory that implements a learning bias derived from statistical learning theory. Support vector 
machine was initially popular with the NIPS community and now is an active part of the machine 
learning research around the world. SVM becomes famous when, using pixel maps as input; it 
gives accuracy comparable to sophisticated neural networks with elaborated features in a 
handwriting recognition task [2]. It is also being used for many applications, such as hand writing 
analysis, face analysis and so forth, especially for pattern classification and regression-based 
applications. The foundations of Support Vector Machines (SVM) have been developed by 
Vapnik[3] and gained popularity due to many promising features such as better empirical 
performance. The formulation uses the Structural Risk Minimization (SRM) principle, which has 
been shown to be superior, [4], to traditional Empirical Risk Minimization (ERM) principle, used 
by conventional neural networks. SRM minimizes an upper bound on the expected risk, whereas 
ERM minimizes the error on the training data. It is this difference which equips SVM with a 
greater ability to generalize, which is the goal in statistical learning. SVMs were developed to 
solve the classification problem, but recently they have been extended to solve regression 
problems [5]. 
In statistical learning theory the problem of supervised learning is formulated as follows. We are given 
a set of training data {(x1, y1) ... (xl,yl)} in Rn x R sampled according to unknown probability 
distribution P(x,y), and a loss function V(y,f(x)) that measures the error, for a given x, f(x) is 
"predicted" instead of the actual value y. The problem consists in finding a function f that minimizes 
the expectation of the error on new data that is, finding a function f that minimizes the expected error: 
∫V(y,f(x)) P(x, y) dx dy. In statistical modeling we would choose a model from the hypothesis space, 
which is closest (with respect to some error measure) to the underlying function in the target space. 
More on statistical learning theory can be found on introduction to statistical learning theory. 
Fig 2.2.1: Complexity of SVM 
INTRODUCTION TO SVM: WHY SVM? 
Firstly, working with neural networks for supervised and unsupervised learning showed good results 
while used for such learning applications. MLP’s uses feed forward and recurrent networks. Multilayer 
perceptron (MLP) properties include universal approximation of continuous nonlinear functions and 
include learning with input-output patterns and also involve advanced network architectures with 
multiple inputs and outputs [10]. 
Fig 2.2.2: Multilayer Perceptron 
There can be some issues noticed. Some of them are having many local minima and also finding how 
many neurons might be needed for a task is another issue which determines whether optimality of that 
NN is reached. Another thing to note is that even if the neural network solutions used tends to 
converge, this may 
not result in a unique solution [11]. Now let us look at another example where we plot the data and try 
to classify it and we see that there are many hyper planes which can classify it. But which one is 
better? 
Fig 2.2.3: Hyperplanes classification 
Kernel trick 
Let’s first look at few definitions as what is a kernel and what does feature space mean? 
Kernel: If data is linear, a separating hyper plane may be used to divide the data. However, it is often 
the case that the data is far from linear and the datasets are inseparable. To allow for this kernel are 
used to non-linearly map the input data to a high-dimensional space. The new mapping is then linearly 
separable [1]. A very simple illustration of this is shown below in figure. 
Fig 2.2.4: Illustration of Linearly Separable Mapping 
Feature Space: Transforming the data into feature space makes it possible to define a similarity 
measure on the basis of the dot product. If the feature space is chosen suitably, pattern recognition can 
be easy. 
First, we convert the problem with optimization to the dual form in which we try to eliminate w, and a 
Lagrangian now is only a function of λi. There is a mathematical solution for it but this can be avoided 
here as this tutorial has instructions to minimize the mathematical equations, I would describe it 
instead. To solve the problem, we should maximize the LD with respect to λi. The dual form simplifies 
the optimization and we see that the major achievement is the dot product obtained from this. 
Here we see that we need to represent the dot product of the data vectors used. The dot product of 
nonlinearly mapped data can be expensive.  
The kernel trick just picks a suitable function that corresponds to dot product of some nonlinear 
mapping instead. Some of the most commonly chosen kernel functions are given below in later part of 
this tutorial. A particular kernel is only chosen by trial and error on the test set, choosing the right 
kernel based on the problem or application would enhance SVM’s performance. The idea of kernel 
function is to enable operations to be performed in the input space rather than the potentiality high 
dimensional feature space. The Kernel function plays a critical role in SVM and its performance. 
SVM Kernel Functions 
SVM algorithms use a group of mathematical functions that are known as kernels. The function of 
kernel is to require data as input and transform it into the desired form. Different SVM algorithms are 
different kinds of kernel functions. These functions are of different kinds – for linear, polynomial, 
radial basis function. The most preferred kind of kernel function is rbf. Because it’s localized and has a 
finite response along the complete x-axis. The kernel function returns the scalar product between two 
points in an exceedingly suitable feature space. Thus, by defining a notion of resemblance, with a little 
computing cost even in the case of very high-dimensional spaces. 
Types of kernel functions 
Linear kernel: This kernel is one–dimensional and is the most basic form of kernel in SVM. 
Polynomial kernel: The polynomial kernel is a general representation of kernels with a degree of 
more than one. It is useful for image processing. There are two types: 
Homogenous Polynomial Kernel: 
Inhomogeneous Polynomial Kernel: 
Gaussian RBF Kernel: 
RBF is the radial basis function. This is used when there is no prior knowledge about the data. 
SVM are utilized in applications like: 
• Detection of fake accounts 
• Handwriting recognition. 
• Intrusion detection. 
• Face detection. 
That’s why we prefer SVMs in various machine learning applications. Also, it can handle both 
classification and regression on linear and non-linear data. It is a great algorithm to choose when you 
are working with smaller datasets that have tens to thousands of features, they typically find more 
accurate results when put next to other algorithms due to ability to handle small, complex datasets. 
SVM classifiers offer good accuracy and perform faster prediction compared to other. They also use 
less memory because they use a subset of training points in the decision phase. SVM works well with a 
clear margin of separation and with high dimensional space.The major strengths of SVM are the 
training is relatively easy. No local optimal, unlike in neural networks. It scales relatively well to high 
dimensional data and the trade-off between classifier complexity and error can be controlled explicitly. 
The weakness includes the need for good kernels. It is one of the best approaches to data modeling. 
SVM FOR CLASSIFICATION 
SVM is a useful technique for data classification. Even though it’s considered that neural networks are 
easier to use than this, however, sometimes unsatisfactory results are obtained. A classification task 
usually involves with training and testing data which consist of some data instances. Each instance in 
the training set contains one target values and several attributes. The goal of SVM is to produce a 
model which predicts target value of data instances in the testing set which are given only the 
attributes. Classification in SVM is an example of Supervised Learning. Known labels help indicate 
whether the system is performing in a right way or not. This information points to a desired response, 
validating the accuracy of the system, or be used to help the system learn to act correctly. A step in 
SVM classification involves identification as which are intimately connected to the known classes. 
This is called feature selection or feature extraction. Feature selection and SVM classification together 
have a use even when prediction of unknown samples is not necessary. They can be used to identify 
key sets which are involved in whatever processes distinguish the classes. 
ALGORITHM FOR SVM BASED CLASSIFICATION 
• Import the dataset. 
• Explore the data to figure out what they look like. 
• Pre-process the data by using techniques. 
• Split the data into attributes and labels. 
• Divide the data into training and testing sets. 
• Train the SVM algorithm. 
• Make some predictions. 
• Evaluate the results of the algorithm. 
2.3 SOFTWARE DEVELOPMENT LIFE CYCLE 
There are various software development approaches defined and designed which are used/employed 
during development process of software, these approaches are also referred as "Software Development 
Process Models". 
Fig 2.3.1: Software Development Life Cycle 
REQUIREMENTS 
Business requirements are gathered in this phase. This phase is the main focus of the project managers 
and stake holders. Meeting with managers, stake holders and users are held in order to determine the 
requirements. Who is going to use the system? How will they use the system? What data should be 
input into the system? What they should be output by the system? These are general questions that get 
answered during a requirement gathering phase. This produces a nice big list of functionalities that the 
system should provide, which describes functions the system should perform, business logic that 
processes data, what data is stored and used by the system, and how the user interface should work. 
The overall result is the system as a whole and how it performs, not how it is actually going to do it. 
DESIGN 
The software system design is produced from the results of the requirements phase. Architects have the 
ball in their court during this phase and this is the phase in which their focus lies. This is where the 
details on how the system will work is produced. Architecture, including hardware and software, 
communication, software design (UML is produced here) are all part of the deliverables of a design 
phase. 
IMPLEMENTATION 
Code is produced from the deliverables of the design phase during implementation, and this is the 
longest phase of the software development life cycle. For a developer, this is the main focus of the life 
cycle because this is where the code is produced. Implementation my overlap with both the design and 
testing phases. Many tools exist (CASE tools) to actually automate the production of code using 
information gathered and produced during the design phase. 
TESTING 
During testing, the implementation is tested against the requirements to make sure that the product is 
actually solving the needs addressed and gathered during the requirements phase. Unit tests and 
system/acceptance tests are done during this phase. Unit tests act on a specific component of the 
system, while system tests act on the system as a whole. 
So, in a nutshell, that is a very basic overview of the general software development life cycle model. 
Now let’s delve into some of the traditional and widely used variations. 
2.4 STUDY OF THE SYSTEM 
In the flexibility of uses the interface has been developed a graphics concept in mind, associated 
through a browser interface. The GUIs at the top level has been categorized as follows: 
• Administrative User Interface Design 
• The Operational and Generic User Interface Design 
The administrative user interface concentrates on the consistent information that is practically, part of 
the organizational activities and which needs proper authentication for the data collection. The 
Interface helps the administration with all the transactional states like data insertion, data deletion, and 
data updating along with executive data search capabilities. 
The operational and generic user interface helps the users upon the system in transactions through the 
existing data and required services. The operational user interface also helps the ordinary users in 
managing their own information helps the ordinary users in managing their own information in a 
customized manner as per the assisted flexibilities. 
Fig 2.4.1: Study of the System 
2.5 SYSTEM ANALYSIS 
The Systems Development Life Cycle (SDLC), or Software Development Life Cycle in systems 
engineering, information systems and software engineering, is the process of creating or altering 
systems, and the models and methodologies that people use to develop these systems. 
In software engineering the SDLC concept underpins many kinds of software development 
methodologies. These methodologies form the framework for planning and controlling the creation of 
an information system the software development process. 
SOFTWARE MODEL OR ARCHITECTURAL ANALYSIS 
Structured project management techniques (such as an SDLC) enhance management’s control over 
projects by dividing complex tasks into manageable sections. A software life cycle model is either a 
descriptive or prescriptive characterization of how software is or should be developed. But none of the 
SDLC models discuss the key issues like Change management, Incident management and Release 
management processes within the SDLC process, but it is addressed in the overall project management. 
In the proposed hypothetical model, the concept of user-developer interaction in the conventional 
SDLC model has been converted into a three-dimensional model which comprises of the user, owner 
and the developer. In the proposed hypothetical model, the concept of user-developer interaction in the 
conventional SDLC model has been converted into a three-dimensional model which comprises of the 
user, owner and the developer. The one size fits all‖ approach to applying SDLC methodologies is no 
longer appropriate. We have made an attempt to address the above-mentioned defects by using a new 
hypothetical model for SDLC described elsewhere. The drawback of addressing these management 
processes under the overall project management is missing of key technical issues pertaining to 
software development process that is, these issues are talked in the project management at the surface 
level but not at the ground level. 
 
 
 
 
 
 
 
 
 
                                           CHAPTER-3 
REQUIREMENTS SPECIFICATION 
 
 
 
 
 
 
 
 
 
 
 
CHAPTER-3 
REQUIREMENTS SPECIFICATION 
3.1 FUNCTIONAL REQUIREMENTS 
OUTPUT DESIGN  
Outputs from computer systems are required primarily to communicate the results of processing to 
users. They are also used to provide a permanent copy of the results for later consultation. The various 
types of outputs in general are: 
● External Outputs, whose destination is outside the organization 
● Internal Outputs whose destination is within organization and they are the user’s main interface 
with the computer. 
● Operational outputs whose use is purely within the computer department. 
● Interface outputs, which involve the user in communicating directly. 
OUTPUT DEFINITION 
The output should be defined in the terms of the following points: 
● Type of the output   
● Content of the output   
● Format of the output   
● Location of the output   
● Frequency of the output   
● Volume of the output   
● Sequence of the output 
It is not always desirable to print or display data as it is held on a computer. It should be decided as 
which form of the output is the most suitable. 
INPUT DESIGN 
Input design is a part of overall system design. The main objective during the input design is as given 
below: 
● To produce a cost-effective method of input.   
● To achieve the highest possible level of accuracy.   
● To ensure that the input is acceptable and understood by the user. 
INPUT STAGES 
The main input stages can be listed below: 
● Data recording   
● Data transcription   
● Data conversion   
● Data verification   
● Data control   
● Data transmission   
● Data validation   
● Data correction 
INPUT TYPES 
It is necessary to determine the various types of inputs, Inputs can be categorized as follows: 
● External inputs, which are prime inputs for the system.  
● Internal inputs, which are user communications with the system.   
● Operational, which are computer department’s communications to the system? 
● Interactive, which are inputs entered during a dialogue. 
INPUT MEDIA 
At this stage choice has to be made about the input media. To conclude about the input media 
consideration has to be given to: 
● Type of input   
● Flexibility of format  
● Speed   
● Accuracy    
● Verification methods   
● Rejection rates   
● Ease of correction   
● Storage and handling requirements   
● Security   
● Easy to use   
● Portability  
Keeping in view the above description of the input types and input media, it can be said that most of 
the inputs are of the form of internal and interactive. As input data is to be the directly keyed in by the 
user, the keyboard can be considered to be the most suitable input device. 
ERROR AVOIDANCE  
At this stage care is to be taken to ensure that input data remains accurate form the stage at which it is 
recorded up to the stage in which the data is accepted by the system. This can be achieved only by 
means of careful control each time the data is handled. 
ERROR DETECTION 
Even though every effort is made to avoid the occurrence of errors, still a small proportion of errors is 
always likely to occur, these types of errors can be discovered by using validations to check the input 
data.  
DATA VALIDATION 
Procedures are designed to detect errors in data at a lower level of detail. Data validations have been 
included in the system in almost every area where there is a possibility for the user to commit errors. 
The system will not accept invalid data. Whenever an invalid data is keyed in, the system immediately 
prompts the user and the user has to again key in the data and the system will accept the data only if the 
data is correct. Validations have been included where necessary. The system is designed to be a user 
friendly one. In other words, the system has been designed to communicate effectively with the user. 
The system has been designed with popup menus. 
SOFTWARE REQUIREMENTS 
Operating System: Windows 7 and above versions. 
Coding Language: Python. 
Frameworks: Django. 
Server: XAMPP. 
HARDWARE REQUIREMENTS 
System: Intel Core i3 2.4 GHZ and above. 
Hard Disk: Minimum 500 GB is required. 
RAM: Minimum 4GB is required. 
 
 
 
 
 
 
 
 
 
 
 
                       CHAPTER-4 
LANGUAGES OF  
IMPLEMENTATION 
 
 
 
 
 
 
 
 
 
 
CHAPTER-4 
LANGUAGES OF IMPLEMENTATION 
4.1 INTRODUCTION TO PYTHON SCRIPT 
What is a script? 
Up to this point, I have concentrated on the interactive programming capability of Python. This is a 
very useful capability that allows you to type in a program and to have it executed immediately in an 
interactive mode. 
Scripts are reusable? 
Basically, a script is a text file containing the statements that comprise a Python program. Once you 
have created the script, you can execute it over and over without having to retype it each time. 
Scripts are editable 
Perhaps, more importantly, you can make different versions of the script by modifying the statements 
from one file to the next using a text editor. Then you can execute each of the individual versions. In 
this way, it is easy to create different programs with a minimum amount of typing.  
You will need a text editor 
Just about any text editor will suffice for creating Python script files.  
You can use Microsoft Notepad, Microsoft WordPad, Microsoft Word, or just about any word 
processor if you want to. 
DIFFERENCE BETWEEN A SCRIPT AND A PROGRAM  
Script  
Scripts are distinct from the core code of the application, which is usually written in a different 
language, and are often created or at least modified by the end-user. Scripts are often interpreted from 
source code or byte code, whereas the applications they control are traditionally compiled to native 
machine code.  
Program  
The program has an executable form that the computer can use directly to execute the instructions. The 
same program in its human-readable source code form, from which executable programs are derived 
(e.g., compiled) 
4.2 PYTHON  
What is Python?  
Chances you are asking yourself this. You may have found this book because you want to learn to 
program but don’t know anything about programming languages. Or you may have heard of 
programming languages like C, C++, C#, or Java and want to know what Python is and how it 
compares to “big name” languages. Hopefully I can explain it for you. 
PYTHON CONCEPTS  
If you’re not interested in the how’s and whys of Python, feel free to skip to the next chapter. In this 
chapter I will try to explain to the reader why I think Python is one of the best languages available and 
why it’s a great one to start programming with. 
● Open-source general-purpose language.  
● Object Oriented, Procedural, Functional  
● Easy to interface with C/ObjC/Java/Fortran  
● Easy-Ish to interface with C++ (via SWIG) 
Python is a high-level, interpreted, interactive and object-oriented scripting language. Python is 
designed to be highly readable. It uses English keywords frequently where as other languages use 
punctuation, and it has fewer syntactical constructions than other languages. 
● Python is Interpreted − Python is processed at runtime by the interpreter. You do not need to 
compile your program before executing it. This is similar to PERL and PHP.   
● Python is Interactive − You can actually sit at a Python prompt and interact with the interpreter 
directly to write your programs.  
● Python is Object-Oriented − Python supports Object-Oriented style or technique of programming 
that encapsulates code within objects.   
● Python is a Beginner's Language − Python is a great language for the beginner-level 
programmers and supports the development of a wide range of applications from simple text 
processing to WWW browsers to games. 
HISTORY OF PYTHON   
● Python was developed by Guido van Rossum in the late eighties and early nineties at the National 
Research Institute for Mathematics and Computer Science in the Netherlands.   
● Python is derived from many other languages, including ABC, Modula-3, C, C++, Algol- 68, 
Small Talk, and Unix shell and other scripting languages.  
● Python is copyrighted. Like Perl, Python source code is now available under the GNU General 
Public License (GPL).   
● Python is now maintained by a core development team at the institute, although Guido van 
Rossum still holds a vital role in directing its progress. 
PYTHON FEATURES 
Easy-to-learn − Python has few keywords, simple structure, and a clearly defined syntax. This allows 
the student to pick up the language quickly.  
Easy-to-read − Python code is more clearly defined and visible to the eyes.   
Easy-to-maintain − Python's source code is fairly easy-to-maintain.   
A broad standard library − Python's bulk of the library is very portable and cross- platform 
compatible on UNIX, Windows, and Macintosh.    
Interactive Mode − Python has support for an interactive mode which allows interactive testing and 
debugging of snippets of code.   
Portable − Python can run on a wide variety of hardware platforms and has the same interface on all 
platforms.   
Extendable − You can add low-level modules to the Python interpreter. These modules enable 
programmers to add to or customize their tools to be more efficient.  
Databases − Python provides interfaces to all major commercial databases.   
GUI Programming − Python supports GUI applications that can be created and ported to many 
system calls, libraries and windows systems, such as Windows MFC, Macintosh, and the X Window 
system of Unix. 
Scalable − Python provides a better structure and support for large programs than shell scripting. Apart 
from the above-mentioned features, Python has a big list of good features, few are listed below:   
● It supports functional and structured programming methods as well as OOP.   
● It can be used as a scripting language or can be compiled to byte-code for building large applications.   
● It provides very high-level dynamic data types and supports dynamic type checking.   
●  IT supports automatic garbage collection.   
DYNAMIC V/S STATIC  
Types Python is a dynamic-typed language. Many other languages are static typed, such as C/C++ and 
Java. A static typed language requires the programmer to explicitly tell the computer what type of 
“thing” each data value is.  
For example, in C if you had a variable that was to contain the price of something, you would have to 
declare the variable as a “float” type. This tells the compiler that the only data that can be used for that 
variable must be a floating-point number, i.e., a number with a decimal point. If any other data value 
was assigned to that variable, the compiler would give an error when trying to compile the program.  
However, Python doesn’t require this. You simply give your variables names and assign values to 
them. The interpreter takes care of keeping track of what kinds of objects your program is using. This 
also means 26 that you can change the size of the values as you develop the program. Say you have 
another decimal number (a.k.a. a floating-point number) you need in your program. With a static typed 
language, you have to decide the memory size the variable can take when you first initialize that 
variable. A double is a floating-point value that can handle a much larger number than a normal float 
(the actual memory sizes depend on the operating environment). If you declare a variable to be a float 
but later on assign a value that is too big to it, your program will fail; you will have to go back and 
change that variable to be a double. With Python, it doesn’t matter. You simply give it whatever 
number you want and Python will take care of manipulating it as needed. It even works for derived 
values.  
For example, say you are dividing two numbers. One is a floating-point number and one is an integer. 
Python realizes that it’s more accurate to keep track of decimals so it automatically calculates the result 
as a floating-point number. 
VARIABLES  
Variables are nothing but reserved memory locations to store values. This means that when you create a 
variable you reserve some space in memory.  
Based on the data type of a variable, the interpreter allocates memory and decides what can be stored 
in the reserved memory. Therefore, by assigning different data types to variables, you can store 
integers, decimals or characters in these variables.  
STANDARD DATA TYPES  
The data stored in memory can be of many types. For example, a person's age is stored as a numeric 
value and his or her address is stored as alphanumeric characters. Python has various standard data 
types that are used to define the operations possible on them and the storage method for each of them.  
Python has five standard data types: 
● Numbers   
● String   
● List   
● Tuple   
● Dictionary 
PYTHON NUMBERS  
Number data types store numeric values. Number objects are created when you assign a value to them.  
PYTHON STRINGS  
Strings in Python are identified as a contiguous set of characters represented in the quotation marks. 
Python allows for either pairs of single or double quotes. Subsets of strings can be taken using the slice 
operator ([ ] and [:]) with indexes starting at 0 in the beginning of the string and working their way 
from -1 at the end.  
PYTHON LISTS  
Lists are the most versatile of Python's compound data types. A list contains items separated by 
commas and enclosed within square brackets ([]). To some extent, lists are similar to arrays in C. One 
difference between them is that all the items belonging to a list can be of different data type.  
The values stored in a list can be accessed using the slice operator ([ ] and [:]) with indexes starting at 0 
in the beginning of the list and working their way to end -1. The plus (+) sign is the list concatenation 
operator, and the asterisk (*) is the repetition operator.  
PYTHON TUPLES  
A tuple is another sequence data type that is similar to the list. A tuple consists of a number of values 
separated by commas. Unlike lists, however, tuples are enclosed within parentheses. The main 
differences between lists and tuples are: Lists are enclosed in brackets ( [ ] ) and their elements and size 
can be changed, while tuples are enclosed in parentheses ( ( ) ) and cannot be updated. Tuples can be 
thought of as read-only lists. 
PYTHON DICTIONARY  
Python's dictionaries are kind of hash table type. They work like associative arrays or hashes found in 
Perl and consist of key-value pairs. A dictionary key can be almost any Python type, but are usually 
numbers or 28 strings. Values, on the other hand, can be any arbitrary Python object. Dictionaries are 
enclosed by curly braces ({ }) and values can be assigned and accessed using square braces ([]).  
DIFFERENT MODES IN PYTHON  
Python has two basic modes: 
1.Normal: 
The normal mode is the mode where the scripted and finished .py files are run in the Python interpreter.  
2.Interactive: 
Interactive mode is a command line shell which gives immediate feedback for each statement, while 
running previously fed statements in active memory. As new lines are fed into the interpreter, the fed 
program is evaluated both in part and in whole. 
PYTHON LIBRARIES ARE  
Requests 
The most famous http library written by kennethreitz. It’s a must have for every python developer.  
Scarpy 
If you are involved in web scraping then this is a must have library for you. After using this library, you 
won’t use any other.  
wxPython 
A Gui toolkit for python. I have primarily used it in place of tkinter. You will really love it.  
Pillow 
A friendly fork of PIL (Python Imaging Library). It is more user friendly than PIL and is a must have 
for anyone who works with images.  
SQL Alchemy 
A database library. Many love it and many hate it. The choice is yours.  
Beautiful Soup 
I know it’s slow but this xml and html parsing library is very useful for beginners. 
Twisted 
The most important tool for any network application developer. It has a very beautiful Api and is used 
by a lot of famous python developers.  
NumPy 
How can we leave this very important library? It provides some advance math functionalities to 
python.  
SciPy 
When we talk about NumPy then we have to talk about scipy. It is a library of algorithms and 
mathematical tools for python and has caused many scientists to switch from ruby to python.  
Matplotlib 
A numerical plotting library. It is very useful for any data scientist or any data analyzer.  
Pygame  
Which developer does not like to play games and develop them? This library will help you achieve 
your goal of 2d game development.  
Pyglet 
A 3d animation and game creation engine. This is the engine in which the famous python port of mine
craft was made.  
pyQT 
A GUI toolkit for python. It is my second choice after wxpython for developing GUIs for my python 
scripts.  
pyGtk  
Another python GUI library. It is the same library in which the famous BitTorrent client is created.  
Scapy 
A packet sniffer and analyzer for python made in python.   
Pywin32  
A python library which provides some useful methods and classes for interacting with windows.  
nltk 
Natural Language Toolkit – I realize most people won’t be using this one, but it’s generic enough. It is 
a very useful library if you want to manipulate strings. But it’s capacity is beyond that. Do check it out.  
nose 
A testing framework for python. It is used by millions of python developers. It is a must have if you do 
test driven development. 
SymPy 
SymPy can do algebraic evaluation, differentiation, expansion, complex numbers, etc. It is contained in 
a pure Python distribution. 
IPython 
It just can’t stress enough how useful this tool is. It is a python prompt on steroids. It has completion, 
history, shell capabilities, and a lot more. Make sure that you take a look at it.  
Numpy 
NumPy’s main object is the homogeneous multidimensional array. It is a table of elements (usually 
numbers), all of the same type, indexed by a tuple of positive integers. In NumPy dimensions are called 
axes. The number of axes is rank.  
● Offers Matlab-ish capabilities within Python  
●  Fast array operations  
●  2D arrays, multi-D arrays, linear algebra etc.  
Matplotlib 
High quality plotting library. 
PYTHON MODULES  
Python allows us to store our code in files (also called modules). This is very useful for more serious 
programming, where we do not want to retype a long function definition from the very beginning just 
to change one mistake. In doing this, we are essentially defining our own modules, just like the 
modules defined already in the Python library.  
To support this, Python has a way to put definitions in a file and use them in a script or in an interactive 
instance of the interpreter. Such a file is called a module; definitions from a module can be imported 
into other modules or into the main module. 
TESTING CODE   
● As indicated above, code is usually developed in a file using an editor.   
● To test the code, import it into a Python session and try to run it.   
● Usually there is an error, so you go back to the file, make a correction, and test again.   
● This process is repeated until you are satisfied that the code works.   
● The entire process is known as the development cycle.   
● There are two types of errors that you will encounter.  
● Syntax errors occur when the form of some command is invalid.   
● This happens when you make typing errors such as misspellings  
● Python will always give an error message for a syntax error. 
FUNCTIONS IN PYTHON  
It is possible, and very useful, to define our own functions in Python. Generally speaking, if you need 
to do a calculation only once, then use the interpreter. But when you or others have need to perform a 
certain type of calculation many times, then define a function.  
You use functions in programming to bundle a set of instructions that you want to use repeatedly or 
that, because of their complexity, are better self-contained in a sub-program and called when needed. 
That means that a function is a piece of code written to carry out a specified task.  
To carry out that specific task, the function might or might not need multiple inputs. When the task is 
carried out, the function can or cannot return one or more values. There are three types of functions in 
python:  
help (), min (), print (). 
PYTHON NAMESPACE  
Generally speaking, a namespace (sometimes also called a context) is a naming system for making 
names unique to avoid ambiguity. Everybody knows a name-spacing system from daily life, i.e. the 
naming of people in first name and family name (surname).  
An example is a network: each network device (workstation, server, printer, ...) needs a unique name 
and address. Yet another example is the directory structure of file systems. 
Some namespaces in Python: 
global names of a module  
local names in a function or method invocation  
built-in names: this namespace contains built-in functions (e.g.,abs (), cmp(), ...) and built-in 
exception names  
GARBAGE COLLECTION  
Garbage Collector exposes the underlying memory management mechanism of Python, the automatic 
garbage collector. The module includes functions for controlling how the collector operates and to 
examine the objects known to the system, either pending collection or stuck in reference cycles and 
unable to be freed. 
 
 
                        
 
 
                       CHAPTER-5 
SYSTEM DESIGN 
 
 
  
 
 
 
 
                                  
CHAPTER-5 
SYSTEM DESIGN 
5.1 INTRODUCTION 
Software design sits at the technical kernel of the software engineering process and is applied 
regardless of the development paradigm and area of application. Design is the first step in the 
development phase for any engineered product or system. The designer’s goal is to produce a model or 
representation of an entity that will later be built. Beginning, once system requirement has been 
specified and analyzed, system design is the first of the three technical activities -design, code and test 
that is required to build and verify software. 
The importance can be stated with a single word “Quality”. Design is the place where quality is 
fostered in software development. Design provides us with representations of software that can assess 
for quality. Design is the only way that we can accurately translate a customer’s view into a finished 
software product or system. Software design serves as a foundation for all the software engineering 
steps that follow. Without a strong design we risk building an unstable system – one that will be 
difficult to test, one whose quality cannot be assessed until the last stage. The purpose of the design 
phase is to plan a solution of the problem specified by the requirement document. This phase is the first 
step in moving from the problem domain to the solution domain. In other words, starting with what is 
needed, design takes us toward how to satisfy the needs. The design of a system is perhaps the most 
critical factor affection the quality of the software; it has a major impact on the later phase, particularly 
testing, maintenance. The output of this phase is the design document. This document is similar to a 
blueprint for the solution and is used later during implementation, testing and maintenance. The design 
activity is often divided into two separate phases System Design and Detailed Design. 
System Design also called top-level design aims to identify the modules that should be in the system, 
the specifications of these modules, and how they interact with each other to produce the desired 
results. At the end of the system design all the major data structures, file formats, output formats, and 
the major modules in the system and their specifications are decided. During, Detailed Design, the 
internal logic of each of the modules specified in system design is decided. During this phase, the 
details of the data of a module is usually specified in a high-level design description language, which is 
independent of the target language in which the software will eventually be implemented. 
In system design the focus is on identifying the modules, whereas during detailed design the focus is 
on designing the logic for each of the modules. In other works, in system design the attention is on 
what components are needed, while in detailed design how the components can be implemented in 
software is the issue. 
Design is concerned with identifying software components specifying relationships among 
components. Specifying software structure and providing blue print for the document phase. 
Modularity is one of the desirable properties of large systems. It implies that the system is divided into 
several parts. In such a manner, the interaction between parts is minimal clearly specified. During the 
system design activities, Developers bridge the gap between the requirements specification, produced 
during requirements elicitation and analysis, and the system that is delivered to the user. Design is the 
place where the quality is fostered in development. Software design is a process through which 
requirements are translated into a representation of software. 
DATA FLOW DIAGRAMS 
A graphical tool used to describe and analyze the moment of data through a system manual or 
automated including the process, stores of data, and delays in the system. Data Flow Diagrams are the 
central tool and the basis from which other components are developed. The transformation of data from 
input to output, through processes, may be described logically and independently of the physical 
components associated with the system. The DFD is also known as a data flow graph or a bubble chart. 
DFDs are the model of the proposed system. They clearly should show the requirements on which the 
new system should be built. Later during design activity this is taken as the basis for drawing the 
system’s structure charts. The Basic Notation used to create a DFD’s are as follows: 
1.Dataflow: Data move in a specific direction from an origin to a destination. 
2.Process: People, procedures, or devices that use or produce (Transform) Data. The physical 
component is not identified. 
3.Source: External sources or destination of data, which may be People, programs, organizations or 
other entities. 
4.Data Store: Here data are stored or referenced by a process in the System. 
Use Case Diagram 
Use case diagrams model the functionality of a system using actors and use cases. Use cases are 
services or functions provided by the system to its users. 
Basic Use Case Diagrams Symbols and Notations System 
Draw your system's boundaries using a rectangle that contains use cases. Place actors outside the 
system’s boundaries. 
Use Case 
Draw use cases using ovals. Label with ovals with verbs that represent the system's functions. 
Actors 
Actors are the users of a system. When one system is the actor of another system, label the actor 
system with the actor stereotype. 
Relationships 
Illustrate relationships between an actor and a use case with a simple line. For relationships among use 
cases, use arrows labeled either "uses" or "extends." A "uses" relationship indicates that one use case is 
needed by another in order to perform a task. An "extends" relationship indicates alternative options 
under a certain use case. 
Sequence diagram 
Sequence diagrams describe interactions among classes in terms of an exchange of  
messages over time. 
Basic Sequence Diagram Symbols and Notations 
Class roles 
Class roles describe the way an object will behave in context. Use the UML object symbol to illustrate 
class roles but, don't list object attributes. 
Activation 
Activation boxes represent the time an object needs to complete a task. 
Messages 
Messages are arrows that represent communication between objects. Use half-arrowed lines to 
represent asynchronous messages. Asynchronous messages are sent from an object that will not wait 
for a response from the receiver before continuing its tasks. 
Various types of Sequence and Collaboration Diagrams 
Lifelines 
Lifelines are vertical dashed lines that indicate the object's presence over time. 
Destroying Objects 
Objects can be terminated early using an arrow labeled "<< destroy >>" that points to an X. 
Loops 
A repetition or loop within a sequence diagram is depicted as a rectangle. Place the condition for 
exiting the loop at the bottom left corner in square brackets [ ]. 
Activity Diagram 
An activity diagram illustrates the dynamic nature of a system by modeling the flow of control from 
activity to activity. An activity represents an operation on some class in the system that results in a 
change in the state of the system. Typically, activity diagrams are used to model workflow or business 
processes and internal operation. Because an activity diagram is a special kind of state chart diagram, it 
uses some of the same modeling conventions. 
Basic Activity Diagram Symbols and Notations 
Action States 
Action states represent the non-interruptible actions of objects. You can draw an action state in Smart 
Draw using a rectangle with rounded corners. 
Action Flow 
Action flow arrows illustrate the relationships among action states. 
Object Flow 
Object flow refers to the creation and modification of objects by activities. An object flow arrow from 
an action to an object means that the action creates or influences the object. An object flow arrow from 
an object to an action indicates that the action state uses the object. 
Initial State 
A filled circle followed by an arrow represents the initial action state. 
Final State 
An arrow pointing to a filled circle nested inside another circle represents the final action state. 
Branching 
A diamond represents a decision with alternate paths. The outgoing alternates should be labeled with a 
condition or guard expression. You can also label one of the paths "else. 
Synchronization 
A synchronization bar helps illustrate parallel transitions. Synchronization is also called forking and 
joining. 
Swim lanes 
Swim lanes group related activities into one column. 
UML Diagrams Overview  
Fig 5.1.1: UML diagrams Overview 
UML combines best techniques from data modeling (entity relationship diagrams), business modeling 
(work flows), object modeling, and component modeling. It can be used with all processes, throughout 
the software development life cycle, and across different implementation technologies. UML has 
synthesized the notations of the Booch method, the Object-modeling technique (OMT) and Object
oriented software engineering (OOSE) by fusing them into a single, common and widely usable 
modeling language. UML aims to be a standard modeling language which can model concurrent and 
distributed systems. 
Use Case Diagram 
Use-case diagrams describe the high-level functions and scope of a system. These diagrams also 
identify the interactions between the system and its actors. The use cases and actors in use-case 
diagrams describe what the system does and how the actors use it, but not how the system operates 
internally 
Fig 5.1.2: Use Case Diagram 
Sequence Diagram 
A sequence diagram in Unified Modeling Language (UML) is a kind of interaction diagram that shows 
how processes operate with one another and in what order. It is a construct of a Message Sequence 
Chart. A sequence diagram shows, as parallel vertical lines ("lifelines"), different processes or objects 
that live simultaneously, and, as horizontal arrows, the messages exchanged between them, in the order 
in which they occur. This allows the specification of simple runtime scenarios in a graphical manner. 
Fig 5.1.3: Sequence Diagram 
Activity Diagram 
Activity diagrams are graphical representations of Workflows of stepwise activities and actions with 
support for choice, iteration and concurrency. In the Unified Modeling Language, activity diagrams can 
be used to describe the business and operational step-by-step workflows of components in a system. An 
activity diagram shows the overall flow of control. 
Fig 5.1.4: Activity Diagram 
 
System Architecture 
 
Fig5.1.5: System Architecture 
 
 
 
 
 
 
 
CHAPTER-6 
IMPLEMENTATION 
CHAPTER-6 
IMPLEMENTATION 
6.1 Screenshots 
Fig 6.1.1: Code Screenshot 
Fig 6.1.2: Code Screenshot 
Fig 6.1.3: Login Service Provider Interface 
Fig 6.1.4: Remote Users Interface 
Fig 6.1.5: Dataset Details 
Fig 6.1.6: Interface for searching the dataset details 
Fig 6.1.7: Viewing of all Fake Account details 
Fig 6.1.8: Viewing of all Remote Users 
Fig 6.1.9: Viewing of Clone accounts  
Fig 6.1.10: Viewing of Tweet Score Results 
CHAPTER-7 
SYSTEM TESTING 
CHAPTER-7 
SYSTEM TESTING 
The purpose of testing is to discover errors. Testing is the process of trying to discover every 
conceivable fault or weakness in a work product. It provides a way to check the functionality of 
components, sub-assemblies, assemblies and/or a finished product It is the process of exercising 
software with the intent of ensuring that the Software system meets its requirements and user 
expectations and does not fail in an unacceptable manner. There are various types of tests. Each test 
type addresses a specific testing requirement. 
7.1 TYPES OF TESTS 
UNIT TESTING 
Unit testing involves the design of test cases that validate that the internal program logic is functioning 
properly, and that program inputs produce valid outputs. All decision branches and internal code flow 
should be validated. It is the testing of individual software units of the application .it is done after the 
completion of an individual unit before integration. This is a structural testing, that relies on knowledge 
of its construction and is invasive. Unit tests perform basic tests at component level and test a specific 
business process, application, and/or system configuration. Unit tests ensure that each unique path of a 
business process performs accurately to the documented specifications and contains clearly defined 
inputs and expected results. 
INTEGRATION TESTING 
Integration tests are designed to test integrated software components to determine if they actually run 
as one program.  Testing is event driven and is more concerned with the basic outcome of screens or 
fields. Integration tests demonstrate that although the components were individually satisfaction, as 
shown by successfully unit testing, the combination of components is correct and consistent. 
Integration testing is specifically aimed at   exposing the problems that arise from the combination of 
components. 
FUNCTIONAL TESTING 
Functional tests provide systematic demonstrations that functions tested are available as specified by 
the business and technical requirements, system documentation, and user manuals. 
Functional testing is centered on the following items: 
Valid Input 
Invalid Input  
Functions       
Output   
:  identified classes of valid input must be accepted. 
: identified classes of invalid input must be rejected. 
: identified functions must be exercised. 
: identified classes of application outputs must be exercised. 
Systems/Procedures: interfacing systems or procedures must be invoked. 
Organization and preparation of functional tests is focused on requirements, key functions, or special 
test cases. In addition, systematic coverage pertaining to identify Business process flows; data fields, 
predefined processes, and successive processes must be considered for testing. Before functional 
testing is complete, additional tests are identified and the effective value of current tests is determined. 
SYSTEM TESTING 
System testing ensures that the entire integrated software system meets requirements. It tests a 
configuration to ensure known and predictable results. An example of system testing is the 
configuration-oriented system integration test. System testing is based on process descriptions and 
flows, emphasizing pre-driven process links and integration points. 
WHITE BOX TESTING 
White Box Testing is a testing in which in which the software tester has knowledge of the inner 
workings, structure and language of the software, or at least its purpose. It is purpose. It is used to test 
areas that cannot be reached from a black box level. 
BLACK BOX TESTING 
Black Box Testing is testing the software without any knowledge of the inner workings, structure or 
language of the module being tested. Black box tests, as most other kinds of tests, must be written from 
a definitive source document, such as specification or requirements document, such as specification or 
requirements document. It is a testing in which the software under test is treated, as a black box. You 
cannot “see” into it. The test provides inputs and responds to outputs without considering how the 
software works. 
UNIT TESTING 
Unit testing is usually conducted as part of a combined code and unit test phase of the software 
lifecycle, although it is not uncommon for coding and unit testing to be conducted as two distinct 
phases. 
7.2 TEST STRATEGY AND APPROACH 
Field testing will be performed manually and functional tests will be written in detail. 
TEST OBJECTIVES 
• All field entries must work properly. 
• Pages must be activated from the identified link. 
• The entry screen, messages and responses must not be delayed. 
FEATURES TO BE TESTED 
• Verify that the entries are of the correct format 
• No duplicate entries should be allowed 
• All links should take the user to the correct page. 
INTEGRATION TESTING 
Software integration testing is the incremental integration testing of two or more integrated software 
components on a single platform to produce failures caused by interface defects. The task of the 
integration test is to check that components or software applications, e.g., components in a software 
system or – one step up – software applications at the company level – interact without error. 
Test Results: All the test cases mentioned above passed successfully. No defects encountered. 
1)Top-Down Integration   
This method is an incremental approach to the construction of program structure.  Modules are 
integrated by moving downward through the control hierarchy, beginning with the main program 
module. The module subordinates to the main program module are incorporated into the structure in 
either a depth first or breadth first manner. In this method, the software is tested from main module and 
individual stubs are replaced when the test proceeds downwards. 
2)Bottom-up Integration  
This method begins the construction and testing with the modules at the lowest level in the program 
structure. Since the modules are integrated from the bottom up, processing required for modules 
subordinate to a given level is always available and the need for stubs is eliminated. The bottom-up 
integration strategy may be implemented with the following steps 
• The low-level modules are combined into clusters into clusters that perform a specific Software 
sub-function. 
• A driver (i.e.) the control program for testing is written to coordinate test case input and output. 
• The cluster is tested. 
• Drivers are removed and clusters are combined moving upward in the program structure  
The bottom-up approaches test each module individually and then each module is module is integrated 
with a main module and tested for functionality. 
7.3 OTHER TESTING METHODOLOGIES 
USER ACCEPTANCE TESTING 
User Acceptance of a system is the key factor for the success of any system. The system under 
consideration is tested for user acceptance by constantly keeping in touch with the prospective system 
users at the time of developing and making changes wherever required. The system developed provides 
a friendly user interface that can easily be understood even by a person who is new to the system. 
OUTPUT TESTING 
After performing the validation testing, the next step is output testing of the proposed system, since no 
system could be useful if it does not produce the required output in the specified format. Asking the 
users about the format required by them tests the outputs generated or displayed by the system under 
consideration.  Hence the output format is considered in 2 ways – one is on screen and another in 
printed format. 
VALIDATION CHECKING 
Validation checks are performed on the following fields. 
Text Field 
The text field can contain only the number of characters lesser than or equal to its size.  The text fields 
are alphanumeric in some tables and alphabetic in other tables.  Incorrect entry always flashes and 
error message. 
Numeric Field 
The numeric field can contain only numbers from 0 to 9. An entry of any character flashes an error 
message. The individual modules are checked for accuracy and what it has to perform.  Each module is 
subjected to test   run along with sample data.   The individually tested   modules   are integrated into a 
single system.  Testing involves executing the real data information is used in the program the 
existence of any program defect is inferred from the output.  The testing should be planned so   that all 
the requirements are individually tested.A successful test is one that gives out the defects for the 
inappropriate data and produces and output revealing the errors in the system. 
Preparation of Test Data 
Taking various kinds of test data does the above testing. Preparation of test data plays a vital role in the 
system testing. After preparing the test data the system under study is tested using that test data.  
Using Live Test Data 
Live test data are those that are actually extracted from organization files. After a system is partially 
constructed, programmers or analysts often ask users to key in a set of data from their normal 
activities. Then, the systems person uses this data as a way to partially test the system. In other 
instances, programmers or analysts extract a set of live data from the files and have them entered 
themselves. 
It is difficult to obtain live data in sufficient amounts to conduct extensive testing. And, although it is 
realistic data that will show how the system will perform for the typical processing requirement, 
assuming that the live data entered are in fact typical, such data generally will not test all combinations 
or formats that can enter the system. This bias toward typical values then does not provide a true 
system test and in fact ignores the cases most likely to cause system failure.   
7.4 USER TRAINING 
Whenever a new system is developed, user training is required to educate them about the working of 
the system so that it can be put to efficient use by those for whom the system has been primarily 
designed.  
For this purpose, the normal working of the project was demonstrated to the prospective users. Its 
working is easily understandable and since the expected users are people who have good knowledge of 
computers, the use of this system is very easy.  
7.5 MAINTAINENCE 
This covers a wide range of activities including correcting code and design errors. To reduce the need 
for maintenance in the long run, we have more accurately defined the user’s requirements during the 
process of system development. Depending on the requirements, this system has been developed to 
satisfy the needs to the largest possible extent. With development in technology, it may be possible to 
add many more features based on the requirements in future. The coding and designing is simple and 
easy to understand which will make maintenance easier.  
7.6 TESTING STRATEGY  
A strategy for system testing integrates system test cases and design techniques into a well-planned 
series of steps that results in the successful construction of software. The testing strategy must co
operate test planning, test case design, test execution, and the resultant data collection and evaluation. 
A strategy for software testing must accommodate low-level tests that are necessary to verify that a 
small source code segment has been correctly implemented as well as high level tests that validate 
major system functions against user requirements. Software testing is a critical element of software 
quality assurance and represents the ultimate review of specification design and coding.  
SYSTEM TESTING 
Software once validated must be combined with other system elements (e.g., Hardware, people, 
database). System testing verifies that all the elements are proper and that overall system function 
performance is achieved. It also tests to find discrepancies between the system and its original 
objective, current specifications and system documentation. 
UNIT TESTING 
In unit testing different are modules are tested against the specifications produced during the design for 
the modules. Unit testing is essential for verification of the code produced during the coding phase, and 
hence the goals to test the internal logic of the modules. Using the detailed design description as a 
guide, important Conrail paths are tested to uncover errors within the boundary of the modules. This 
testing is carried out during the programming stage itself. In this type of testing step, each module was 
found to be working satisfactorily as regards to the expected output from the module. In Due Course, 
latest technology advancements will be taken into consideration. As part of technical build-up many 
components of the networking system will be generic in nature so that future projects can either use or 
interact with this project. 
Step Test Steps 
Test Data 
Expected Result 
Actual Result 
1 Navigate to login 
page        
Provide valid  
2 
username 
User should be able to 
login 
User= 
neeharika.yadlapall
i@gmail.com 
User is navigated to 
dashboard  
Username is Correct 
Status 
Pass 
Pass 
Username should be 
Correct 
3 
Provide valid   
password 
Password:1234 
4 
Click on Login 
button  
Password should be 
Correct 
Login should be 
successful 
Password is Correct 
Pass 
Login Successful 
Pass 
Table 1: Test case of Login Page 
 
 
 
 
 
 
 
 
 
 
CHAPTER-8 
CONCLUSION 
 
 
 
 
 
 
 
 
 
 
CHAPTER-8 
CONCLUSION 
8.1 CONCLUSION 
Fake and clone profiles have become a very serious problem in online social networks. We hear some 
or the other threats caused by these profiles in everyday life. So, a detection method has been proposed 
which can find both fake and clone Twitter profiles. For fake detection, a set of rules were used which 
when applied can classify fake and genuine profiles. In this research, we proposed an approach for 
detecting fake accounts on Twitter social network, the proposed approach was based on determining 
the effective features for the detection process. The attributes have been collected from different 
research, they have been filtered by extensive analysis as a first stage, and then the features have been 
weighted. Different experiments have been conducted to reach the minimum set of attributes with 
perceiving the best accuracy results. From more than 10 attributes, the proposed approach has reached 
only seven effective attributes for fake accounts detection. Although we claim that these attributes can 
succeed in discovering the fake accounts in other social networks such as Facebook with minor 
changes according to the unique nature of each social network, however, we need to prepare a dataset 
to prove our claim. Moreover, providing an analysis to the tweets content of the user can provide more 
accurate results in the detection process. 
CHAPTER-9 
FUTURE ENHANCEMENT 
CHAPTER-9 
FUTURE ENHANCEMENT 
9.1 FUTURE ENHANCEMENT 
Continuous research in identifying relevant features associated with fake accounts, such as linguistic 
patterns, user behavior, and network characteristics, can lead to the creation of more informative 
feature sets. Advanced feature selection techniques can be employed to identify the most discriminative 
features for better classification accuracy. Exploring deep learning models, such as recurrent neural 
networks (RNNs) and convolutional neural networks (CNNs), can capture complex patterns in textual 
and visual data. Integrating these deep learning architectures with traditional classification algorithms 
can enhance the detection accuracy, especially when dealing with multimedia content. Considering the 
social network structure on Twitter, graph-based algorithms like Graph Convolutional Networks 
(GCNs) can be employed to model the relationships between users. These models can capture the 
influence and interaction patterns between accounts, improving the detection of coordinated fake 
account networks. Adversarial training methods can be employed to create more robust classifiers that 
can withstand adversarial attacks. Adversarial examples specifically crafted to deceive detection 
algorithms can be used to train models, making them resilient against sophisticated attackers. 
Developing real-time detection systems using stream processing techniques can enable immediate 
responses to emerging fake account campaigns. Implementing algorithms that can process Twitter data 
in real-time and update the model dynamically will be crucial for timely detection and mitigation. 
CHAPTER-10 
BIBLIOGRAPHY 
CHAPTER-10 
BIBLIOGRAPHY 
REFERENCES 
[1] Sowmya P and Madhumita Chatterjee ,” Detection of Fake and ClonedProfiles in Online Social 
Networks”, Proceedings 2019: Conference onTechnologies for Future Cities (CTFC). 
[2] Georgios Kontaxis, Iasonas Polakis, Sotiris Ioannidis and Evangelos P.Markatos, “Detecting Social 
Network Profile Cloning”, 2013. 
[3] Piotr Brodka, Mateusz Sobas and Henric Johnson, “Profile Cloning Detection in Social Networks”, 
2014 European Network IntelligenceConference. 
[4] Stefano Cresci, Roberto Di Pietro, Marinella Petrocchi, AngelloSpognardi, Maurizio Tesconi, 
“Fame for sale: Efficient detection of fakeTwitter followers”, 2015 Elsevier’s journal Decision Support 
Systems,Volume 80. 
[5] Ahmed El Azab, Amira M Idrees, Mahmoud A Mahmoud, HeshamHefny, “Fake Account Detection 
in Twitter Based on MinimumWeighted Feature set”, World Academy of Science, Engineering 
andTechnology, International Journal of Computer and InformationEngineering Vol:10, 2016. 
[6] M.A.Devmane and N.K.Rana, “Detection and Prevention of ProfileCloning in Online Social 
Networks”, 2014 IEEE InternationalConference on Recent Advances and Innovations in Engineering. 
[7] Kiruthiga. S, Kola Sujatha. P and Kannan. A, “Detecting CloningAttack in Social Networks Using 
Classification and ClusteringTechniques” 2014 International Conference on Recent Trends 
inInformation Technology. 
[8] Buket Erşahin, Ozlem Aktaş, Deniz Kilinc, Ceyhun Akyol, “Twitterfake account detection”, 2017 
International Conference on ComputerScience and Engineering (UBMK). 
[9] Arpitha D, Shrilakshmi Prasad, Prakruthi S, Raghuram A.S, “Pythonbased Machine Learning for 
Profile Matching”, International ResearchJournal of Engineering and Technology (IRJET), 2018. 
[10] Olga Peled, Michael Fire, Lior Rokach, Yuval Elovici, “Entity Matchingin Online Social 
Networks”, 2013 International Conference on SocialComputing. 
[11] Aditi Gupta and Rishabh Kaushal, “Towards Detecting Fake UserAccounts in Facebook”, 2017 
ISEA Asia Security and Privacy(ISEASP). 
[12] Michael Fire, Roy Goldschmidt, Yuval Elovici, “Online SocialNetworks: Threats and Solutions”, 
JOURNAL OF LATEX CLASSFILES, VOL. 11, NO. 4, DECEMBER 2012, IEEE 
CommunicationsSurveys & Tutorials. 
[13] Ashraf Khalil, Hassan Hajjdiab and Nabeel Al-Qirim, “Detecting FakeFollowers in Twitter: A 
Machine Learning Approach” 2017International Journal of Machine Learning and Computing. 
[14] Mohammad Reza Khayyambashi and Fatemeh Salehi Rizi, “Anapproach for detecting profile 
cloning in online social networks” 2013International Conference on e-Commerce in Developing 
Countries: withfocus on e-Security. 
[15] Mauro Conti, Radha Poovendran and Marco Secchiero, “FakeBook:Detecting Fake Profiles in 
On-line Social Networks”, 2012 IEEE/ACMInternational Conference on Advances in Social Networks 
Analysis andMining. 