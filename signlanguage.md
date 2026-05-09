2024 International Conference on Emerging Innovations and Advanced Computing (INNOCOMP)
Dynamic Sign Language detection system using Media Pipe 
Holistic and LSTM based Deep learning Model  
Dr. V Pavani1 
Department of IT 
VNITSW 
Guntur 
manojpavani81@
gmail.com 
Abstract  
A significant handicap is a loss of verbal 
communication. Sign language serves as one of the 
greatest popular ways for people with various 
disabilities to communicate, while they utilize a 
wide range of other methods as well. Sign language 
is the means by which people who are deaf or hard 
of hearing may communicate with one another and 
with the hearing world. This research describes a 
new architecture for deep learning by utilizing 
Media Pipe Holistic in conjunction with the long
short-term memory (LSTM) network. The LSTM 
network is employed for classification, while 
spectral and spatial data are extracted using Media 
Pipe holistic. 2,000 videos were used to train the 
model, with 80% used for instruction and 20% used 
for verification. On the training data, we got an 
accuracy of 93%, while on the testing data, we got 
96%. Purpose of this approach is to develop a way 
for interaction with ordinary people and hearing 
challenged. 
Keywords: Media Pipe, ISL, LSTM, real-time hand 
gesture recognition 
1. INTRODUCTION 
The deaf community has their own language, sign 
language, which may be used to communicate with 
one other and with their hearing friends and 
relatives. Research into recognizing signs for spoken 
words constitutes one of the most exciting and 
difficult fields of study today. In this area, numerous 
novel approaches have emerged recently [19]. For 
this assignment, we will write code to interpret sign 
language for use with OpenCV. It lays out a process 
979-8-3503-7647-0/24/$31.00 ©2024 IEEE
DOI 10.1109/INNOCOMP63224.2024.00061
V Yamini5 
Department of IT 
VNITSW 
Guntur 
yaminivadala27
Y Neeharika2 
Department of IT 
VNITSW 
Guntur 
neeharika.yadlap
alli@gmail.com 
G Sri Ishwarya3 
Department of IT 
VNITSW 
Guntur 
sriishwarya94@g
mail.com 
J Deekshitha4 
Department of IT 
VNITSW 
Guntur 
deekshitaj09@gm
ail.com 
@gmail.com 
for understanding Indian Sign Language (ISL) then 
having it converted into written English. 
Humans naturally and most efficiently express 
themselves through gestures, making them a major 
instrument of symbolic communication [22]. There 
is a wide range of behaviours, from the simplest to 
the most sophisticated, that enable us to interact with 
one another [20]. Because of the recent burst of 
development made in the disciplines in machine 
vision and deep learning, new methods of 
communicating with computers that take benefit of 
human biology are garnering a lot of attention [16]. 
This is a direct result of the explosion of advance 
made in those fields. It should come as no surprise 
that people are able to communicate with machines 
using hand gestures [21]. The hand of a person 
constitutes one of the most changeable elements of 
the body, so it seems sense that people are able to 
utilize hand gestures to convey a wide range of 
feelings and thoughts [18]. They are commonly used 
for establishing a two-way connection amongst 
individuals and their computers or additional 
electronic devices like mobile phones, robots, car 
entertainment systems, etc. [23] Humans and 
computers can communicate without the need for 
touching, wired-controlled input tools [11] thanks to 
gesture recognition. 
As demonstrated in Figure 1, a static gesture [12] 
involves keeping the hand in a fixed position for an 
extended period of time while the rest of the body 
moves freely. In the second scenario, the arm and 
hand move through a series of positions that change 
based on the duration of the animation [24]. The 
term for this type of gesture is "dynamic gesture" 
330
[13]. Hand movement detection systems usually 
comprise of three phases: the pre-processing stage, 
the feature extraction stage, and the gesture 
recognition step. For gesture detection to work, 
hands must be in motion during the video feed [15]. 
The process begins with a frame-by-frame 
decomposition of the video stream; then, features are 
extracted; finally, the hands' movements are 
identified. 
Fig 1: Type of hand gestures 
Deep Learning is a relatively recent branch of 
machine learning (ML) which derives its 
information on the makeup and functioning of the 
human brain [25]. It is also known by its acronym, 
DL. For more efficient model learning, it employs 
several hidden layers of neural networks [14]. It is 
able to quickly and reliably learn the characteristics 
of an item, regardless of how complicated the 
background may be. The LSTM DL model is very 
popular for image processing tasks. Detection and 
recognition of visual objects, as well as speech 
recognition, are just some of the many modern uses 
of DL [17]. In recent years, numerous deep learning
based approaches to recognizing hand gestures have 
been proposed. Automatic hand gesture recognition 
involves the basic stages shown in Fig. 2. 
2. RELATED WORKS 
N. Naz[1], The deaf and speech-impaired people can 
easily interact and communicate with the general 
public thanks to sign language recognition (SLR). 
The major objective of the word-level or standalone 
sign language recognition (SLR), which is a 
procedure that is both fundamental and 
sophisticated, is to reliably detect signed words 
using models. Learning sign language is incredibly 
challenging due to the complex and quick hand 
movements, body movements, facial expressions, 
and lip movements that are required. For SLR, 
multiple input modalities have been proposed, 
including RGB, RGB-D, optical Flow, and 
pose/skeleton. Nevertheless, these modalities are 
highly complex, and state-of-the-art (SOTA) 
approaches are sometimes overly complex and 
parameterized. Our main goal in this research is to 
employ body positions and the hands as an input 
medium. Finding the most important and unique 
features for every skeletal joint is a significant 
challenge in pose-based feature-based training. To 
this end, we provide a lightweight, accurate, and 
efficient pose-based pipeline that makes use of a 
bottleneck structure, residual connections, and a 
graph convolution networks (GCN). 
Z. Cui[2], The goal of sign language production is to 
use spoken language to automatically create 
coordinated sign language videos. The majority of 
current approaches treat the bones as a whole series 
when dealing with sequence-to-sequence tasks, but 
they neglect to account for the rich graph data 
between joints and edges. To address this issue, we 
provide in this study a brand-new technique called 
Spatial-Temporal Graph Transformer (STGT). To be 
more precise, we first create a novel graph format 
based on kinesiology in order to extract graph 
properties from skeletons. Next, the intra-frame as 
well as inter-frame correlations are captured by the 
spatial-temporal network self-attention using graph 
topology. Our main contribution is the simultaneous 
computation of attention maps on the spatial and 
temporal dimensions, coupled with the application 
of graph convolution to enhance the skeletal 
structure's short-term characteristics. The points and 
lines that make up the skeleton are used to determine 
the final shape of the skeleton, which is then used to 
build new skeletons. 
H. Ansar et al[3]., With the most recent 
developments, recognition of hand gestures is 
growing in popularity and effectiveness as a 
communication tool from a research standpoint. 
While the use of signs is only known by a small 
percentage of individuals worldwide, assistance is 
needed by hearing challenged people everywhere. 
Untrained
 individuals find
 it difficult to 
communicate effectively. In an effort to enhance 
communication and interaction between humans and 
computers with those who have hearing loss, 
members of the scientific community have 
experimented with and tried to train a variety of 
different models on various platforms. Although 
many other gestures have been identified by 
researchers, there is still room for improvement in 
the identification rate. Because cameras capture 
images with a variety of problems, including 
fluctuating light levels that make it difficult to derive 
331
gestures from them, noise and other extraneous 
information that slows down computation, and 
complex backgrounds that make gesture extraction 
more 
difficult.
 This
 research proposes a 
revolutionary method for character recognition and 
detection. The hand gesture recognition portion of 
the suggested system is broken down into five parts. 
First, pre-processed photos are modified for intensity 
and noise reduction. Directional pictures are used to 
identify the region of interest in the pre-processed 
photographs. Convex hulls are used to extract 
landmarks after manual extraction. 
M. A. Bencherif et al.[4], This work offers a unique 
approach for recognizing Arabic signing language 
(ArSL) from consecutive video frames by leveraging 
key points of selected 2D fingers and body. The 
system concatenates a 2D point compression 
network and a 3D CNN skeletons network in order 
to recognize the video that was captured signs for 
both signer independent and dependent modes. We 
created a brand-new ArSL video-based sign library 
in order to achieve this. The new dataset, that 
consists of 80 both static and dynamic signals that 
were performed a total of five times among 40 
signers, will be recorded using a specific approach 
that will be presented. The signs have both numerals 
and letters from the Arabic script, along with a few 
standard signs. Everyone provides the opposite of 
performance accomplish determining the enough 
best number of pictures in succession in order over 
an accurate understanding choice, thus making the 
process for creating an online sign recognition 
system simpler. This is necessary to be able to cope 
with the almost effortless ArSL system, in which the 
balance between the rapidity and accuracy is 
essential for avoiding delayed sign classification. 
Mercanoglu Sincan and H. Y. Keles[5], In order to 
accomplish the challenging task of detecting signs 
using computer models, simultaneous spatial 
modelling of the many sources is required. These 
sources include faces, hands, bodies, and other parts 
of the body. In this study, we provide an 
independent algorithm for recognizing signs of sign 
language. This model is built on a model that was 
trained with the Motion History Images (MHI) that 
are contained within RGB video frames. RGB-MHI 
images are able to correctly preserve the temporal 
perspective of every sign video while just requiring 
the use of a single RGB image. This RGB-MHI 
model is applied in two different methods, both of 
which are presented by us. In the first approach, we 
use the RGB-MHI model to include a motion-based 
spatially concentrate module within the 3D-CNN 
framework. This allows us to focus on moving 
objects more precisely. In the second way, we 
directly combine the RGB-MHI model information 
with the 3D-CNN model features by using a late 
fusion mechanism. This strategy is used in the 
second method. AUTSL and BosphorusSign22k are 
two recently published large-scale datasets of solo 
sign language, and we do comprehensive 
experiments on both of these datasets. Our studies 
have shown that our models, which exclusively 
depend on RGB information, have the ability of 
battling with the most sophisticated models that can 
be identified in the field of science and which utilize 
the use of multifaceted data. This was demonstrated 
by the fact that our models only used RGB data. 
M. Sincan and H. Y. Keles[6], The identification of 
signs through simultaneous global and local 
articulations of numerous sources, such as hand 
shape as well as orientation, hand motions, body 
position, and facial expressions, is a difficult 
problem in sign language recognition Even using the 
most sophisticated models, it is still challenging to 
compute this issue for a wide variety of indicators in 
real-world circumstances. As part of this body of 
work, we present baseline models for performance 
evaluation, as well as a new large-scale 
multidimensional Turkish sign language collection 
(AUTSL) that includes a benchmark. Our dataset 
comprises 38,336 independent sign video samples 
and 226 signs executed by 43 distinct signers. A vast 
range of backgrounds, captured in both indoor and 
outdoor settings, are represented in the samples. 
Additionally, there are variations in the recordings in 
the signers' postures and spatial placements. 
Microsoft Kinect v2 is used to record each sample, 
which includes skeletal modalities, depth, and colour 
image (RGB). In order to conduct user-independent 
evaluations of the models, we developed standard 
training and test sets. We obtained features by 
utilizing neural networks with convolution (CNNs), 
and we described temporal data using 
linear the long-short-term memory (LSTM) are 
techniques. We trained many deep oriented models 
as well as provided empirical evaluations utilizing 
the benchmark. 
 Areeb[7], People who are hard of hearing convey 
their feelings and ideas using sign language, which 
they utilize to reinforce information they hear in 
everyday discussions. In spite of the fact that they 
332
constitute a sizeable component of any community, 
the vast majority of people are unable to interact 
with deaf and hard of hearing people as they are 
either illiterate or lack sufficient knowledge of sign 
language. Understanding sign language requires first 
and foremost being able to recognize, analyse, and 
make sense of significant hand and body 
movements. These kinds of technologies could save 
the lives of hard-pressed hard-of-hearing persons in 
emergencies such coronary artery disease, accidents, 
etc. The current study develops deep learning-driven 
recognition of hand gestures models to reliably 
predict Indian Sign Language (ISL) emergency 
signs. Eight distinct emergency scenarios' worth of 
movies are included in the dataset that was used. 
Three distinct models are fed several extracted 
frames from the videos. One model is used for 
object detection and the other two are for 
classification; the latter is applied after the frames 
have been annotated. 
Q. Xiao[8], For the purpose of recognizing Chinese 
sign language (CSL), a fresh multimodal 
combination method is offered. This framework, 
which is known as the LSTM2+CHMM model, 
combines sequence data for the hand and the 
skeleton by utilizing dual short-term memories 
(LSTM) plus a number of concealed Markov models 
(CHMM). In the first place, original contributions 
include the combination of RGB and D pictures as 
well as a one-of-a-kind hand segmentation method 
that is based on energy rate transforms. This strategy 
is successful in addressing common challenges, such 
as inconsistent lighting, complicated backgrounds, 
and varying skin tones. As a consequence of this, the 
proposed architecture for fusing skeleton and hand 
data can be utilized for vision-based SLR of generic 
humans operating in generic environments. By 
combining neural networks and probability theory, 
our LSTM2+CHMM model, in the end, provides a 
unified method for multiple-sequence fusion. The 
two CSL examples were utilized in an experiment to 
evaluate the proposed SLR structure, and the results 
of the experiment showed the usefulness of the 
framework. 
3. PROPOSED MODEL 
     Media Pipe Framework  
We begin by gathering information from key points 
provided by Media Pipe holistic, including our 
hands, our bodies, and our faces, and storing it as 
NumPy arrays. However, many sequences we use, 
each will consist of 30 individual frames. To detect 
motion across many images, we build and train an 
LSTM (long short-term memory) model with our 
data. Once training is complete, we may employ this 
model for real-time recognition of hand gestures and 
concurrently transform the movement to speech 
using OpenCV. The accuracy increases with the 
number of epochs, but running the model takes 
longer and overfitting of the model is possible. 
Fig-2: Proposed Architecture and Methodology 
LSTM-BASED ACTIVITY RECOGNITION 
In 1997, Sepp Hochreiter and Jürgen Schmidhuber 
published [22] is the recurrent neural network 
(RNN) architecture known as long short-term 
memory (LSTM). Whenever applications can be 
lengthy time delays of uncertain size between key 
occurrences, a network using LSTM is more 
equipped for learning from experience to categorize, 
process, & predict time series than typical RNNs. 
The LSTM model, which may be shown in Figure 1 
below, introduces a novel component known as a 
memory cell. A memory cell consists of four basic 
parts: an input gate, a self-recurrently connected 
neuron, a gate that forgets, and an output gate. If a 
memory cell has a self-recurrent connection with a 
weight of 1, its state will be reliably maintained 
between one instance to the next without any outside 
interference. The gates control how much the 
memory cell interacts with its surroundings. The 
condition of a memory cell can be changed by an 
incoming signal, which can be either allowed or 
blocked by the input gate. The status of a cell with 
memories can either be transmitted to neighbouring 
neurons via the output gate or blocked by it.The 
level of the forget gate's modulation determines 
whether or not the memory cell will recall its 
self-recurrent link. 
333
Fig-3: Representation of a long short-term 
memory (LSTM) neuron 
Fig-4: Structure of LSTM for Dynamic Sign 
Language Recognition 
Algorithm  
Step-1: Build the Adversarial LSTM Model 
Step-2: After the network has been initialized, inputs 
and activations are reset to zero. 
Step-3: Inputs are third to be initialized. 
Step-4: synchronize the forward and reverse motion. -LSTM 
 Gate values have to be calculated. 
 input gates: ��� 
 forget gates: ��� 
 traverse the entire block of cells 
 output gates: ��� 
 update the cell: ��� 
 final hidden state/h = ���=H (���� m ��� 
 +���� m ����� +��
� 
 final output: ���= (���� m ����� +��� 
Step 5: Estimate the loss function and its expected 
value Sequence-to-sequence loss calc, Cross-entropy 
loss calculation for classes 
Step 6: Include random disturbances, 
���� (������� �+�����) = Where ���=arg min ���� 
(������� �+������) 
Step 7: Make use of Adam Optimizer to fine-tune 
the model. 
Hyper Parameters included in LSTM 
Number of LSTM layers: 2 
LSTM units per layer: 64 
Input sequence length: 10 
Dropout rate: 0.2 
Learning rate: 0.001 
Batch size: 32 
Epochs: 50 
Loss function: Mean Squared Error 
Optimizer: Adam 
Dataset 
The IPN Hand dataset includes over 4,000 gestures 
and 800,000 frames from 50 participants. 13 
touchless screen interaction motions, both static and 
dynamic. When compared to other publicly 
accessible hand gesture datasets, IPN Hand has the 
most continuous motions per movie and the fastest 
intra-class fluctuation. The gathering of data was 
designed with real-world continuous HGR issues in 
mind, such as constant actions carried out with no 
changing states, movements that are natural as non
gesture sections, scenes with clutter backgrounds, 
extreme lighting conditions, and static as well as 
dynamic environments. The dataset subjects were 
prompted to capture movements employing their 
own PC at the specified definition and frame rate 
4. RESULTS AND DISCUSSION  
The results of experiments implementing the 
suggested approach are shown below. The Google 
Collab GPU Tesla T4 with 16 GB of memory and 25 
GB of RAM is used for the simulation. The 
proposed model was implemented using the deep 
learning framework Kera’s. As a lightweight model, 
Media Pipe + LSTM is put to use. 
EPOCHS VS ACCURACY 
The x-axis indicates epochs, while the y-axis 
represents accuracy. The models include Model-1: 
334
EPOCHS VS RECALL 
“CNN", "Existing Model-2: “KNN”, and Proposed 
Model: "LSTM”. The "CNN" model's accuracy is 
shown in blue, beginning at 89.2% and steadily 
increasing to 91.9% over the epochs. The red dashed 
line represents the "KNN" model, with accuracy 
starting at 70.8% and gradually rising to 85%. The 
green dash-dot line corresponds to the "LSTM" 
model, showing accuracy rates from 90.5% to 96%. 
The plot provides a visual comparison of model 
performance in terms of accuracy over time 
Fig 5: Epochs Vs Accuracy 
EPOCHS VS PRECISION 
This Python script generates a line plot comparing 
the precision values of three across different epochs. 
Time periods are represented by the x-axis, while 
accuracy ratings are shown along the y-axis. In this 
case, the blue line stands for the "CNN" model, with 
precision ranging from 89.2% to 93%. The red 
dashed line corresponds to the "KNN" model, 
demonstrating precision rates from 67.3% to 75%. 
The green dash-dot line illustrates the "LSTM" 
model, showcasing precision scores from 93.6% to 
97%. 
Fig 6: Epochs Vs Precision 
This Python script generates a line plot comparing 
the recall values of three models ("KNN", "CNN ", 
and "LSTM") across different epochs. Time periods 
are symbolized by the x-axis, while recall ratings are 
shown along the y-axis. In this case, the blue line 
stands for the "CNN" model, with recall ranging 
from 87.4% to 92%. The red dashed line 
corresponds to the "KNN" model, demonstrating 
recall rates from 70.6% to 78%. The green dash-dot 
line illustrates the "Convolution Neural Networks" 
model, Showcasing recall scores from 93.6% to 
97%.  
Fig 7: Epochs Vs Recall 
EPOCHS VS F1-SCORE 
This Python script generates a line plot.In this case, 
the blue line stands for the "CNN" model, with F1
scores ranging from 85.6% to 89%. The red dashed 
line corresponds to the "KNN" model, 
demonstrating F1-scores from 70.6% to 74.9%. The 
green dash-dot line illustrates the "Convolution 
Neural Networks" model, showcasing F-scores from 
94.6% to 98%. 
Fig 8: Epochs Vs F1-Score 
335
EPOCHS VS LOSS 
[1] 
Number of epochs is on the x-axis, and loss is on the y
axis. Information on the epochs and the losses for each of 
the three models is stored in a Data Frame. "Existing 
Model-1: “K-Nearest Neighbour", "Existing Model-2: 
“Convolution Neural Network”, and Proposed Model: 
"LSTM”. The Existing Model-1: KNN shows a 
decreasing trend in loss as epochs progress. The Existing 
Model-2: Convolution Neural Network also exhibits a 
decreasing trend in loss values. The LSTM model shows a 
significant reduction in loss compared to the other 
models. 
Fig 9: Epochs Vs Loss 
5. CONCLUSION 
The results of this investigation suggest that OpenCV and 
Python, with the help of the hypothesis of hands 
segmentation and a hand detecting system, both of which 
make use of the LSTM, are suitable for the development 
of recognition of hand gestures. To sum up, this system 
has successfully completed a number of project goals: 
Construct a robust system for detecting, interpreting, and 
identifying hand movements using Python and OpenCV. 
In addition to displaying hand gestures, the system ought 
to show sign languages. Collection of handwritten 
numbers called the "Modified National Institute of 
Standards and Technology" is utilized extensively in these 
sorts of studies. This database is commonly used for 
training various image processing systems. Smaller and 
more sophisticated networks don't yield decent outcomes, 
thus for this dataset, an LSTM design of moderate 
complexity is necessary. One LSTM architecture achieves 
a remarkable 96% accuracy. The database's image 
processing helps simplify data storage and computation. 
6. References 
N. Naz, H. Sajid, S. Ali, O. Hasan and M. K. 
Ehsan, "Signgraph: An Efficient and Accurate 
Pose-Based Graph Convolution Approach 
Toward Sign Language Recognition," in IEEE 
Access, vol. 11, pp. 19135-19147, 2023, doi: 
10.1109/ACCESS.2023.3247761. 
[2] 
[3] 
[4] 
[5] 
[6] 
[7] 
[8] 
336
Z. Cui, Z. Chen, Z. Li and Z. Wang, "Spatial
Temporal Graph Transformer with Sign Mesh 
Regression for Skinned-Based Sign Language 
Production," in IEEE Access, vol. 10, pp. 
127530-127539, 2022, doi: 
10.1109/ACCESS.2022.3227042. 
H. Ansar et al., "Hand Gesture Recognition for 
Characters Understanding Using Convex Hull 
Landmarks and Geometric Features," in IEEE 
Access, vol. 11, pp. 82065-82078, 2023, doi: 
10.1109/ACCESS.2023.3300712. 
M. A. Bencherif et al., "Arabic Sign Language 
Recognition System Using 2D Hands and Body 
Skeleton Data," in IEEE Access, vol. 9, pp. 
59612-59627, 2021, doi: 
10.1109/ACCESS.2021.3069714. 
O. Mercanoglu Sincan and H. Y. Keles, "Using 
Motion History Images With 3D Convolutional 
Networks in Isolated Sign Language 
Recognition," in IEEE Access, vol. 10, pp. 
18608-18618, 2022, doi: 
10.1109/ACCESS.2022.3151362. 
O. M. Sincan and H. Y. Keles, "AUTSL: A 
Large Scale Multi-Modal Turkish Sign 
Language Dataset and Baseline Methods," in 
IEEE Access, vol. 8, pp. 181340-181355, 2020, 
doi: 10.1109/ACCESS.2020.3028072. 
Q. M. Areeb, Maryam, M. Nadeem, R. 
Alroobaea and F. Anwer, "Helping Hearing
Impaired in Emergency Situations: A Deep 
Learning-Based Approach," in IEEE Access, 
vol. 10, pp. 8502-8517, 2022, doi: 
10.1109/ACCESS.2022.3142918. 
Q. Xiao, M. Qin, P. Guo and Y. Zhao, 
"Multimodal Fusion Based on LSTM and a 
Couple Conditional Hidden Markov Model for 
Chinese Sign Language Recognition," in IEEE 
Access, vol. 7, pp. 112258-112268, 2019, doi: 
10.1109/ACCESS.2019.2925654. 
[9] 
B. Natarajan et al., "Development of an End-to
End Deep Learning Framework for Sign 
Language Recognition, Translation, and Video 
Generation," in IEEE Access, vol. 10, pp. 
104358-104374, 2022, doi: 
10.1109/ACCESS.2022.3210543. 
[10] T. Witchuda, A. Wiranata, S. Maeda and C. 
Premachandra, "Reservoir Computing Model 
for Human Hand Locomotion Signal 
Classification," in IEEE Access, vol. 11, pp. 
19591-19601, 2023, doi: 
10.1109/ACCESS.2023.3247631. 
[11] T. Chaikhumpha, & P. Chomphuwiset (2018, 
January). “Real—time two hand gesture 
recognition with condensation   and   
hidden   
Markov   models”.   In Advanced   Image   
Technology (IWAIT),   
2018   
Workshop on (pp. 1-4). IEEE.  
International 
[12] Shuai-Shi Liu, Yan-Tao Tian, and Dong Li. 
New research advances of facial expression 
recognition.
 In Machine Learning and 
Cybernetics, 2009 International Conference on, 
volume 2, pages 1150–1155. IEEE, 2009. 
[13] N. H. Dardas, & N. D. Georganas (2011). 
“Real-time hand gesture detection and 
recognition using bag-of-features   and   
support   
vector   machine   techniques”. IEEE  
Transactions  
on
  Instrumentation 
Measurement, 60(11), 3592-3607 
 and  
[14] A. K. Tripathy, D. Jadhav, S. A. Barreto, D. 
Rasquinha and S. S. Mathew, Voice For The 
Mute, pp. 2-7, 2015. 
[15] X.  Yingxin,  L.  Jinghua,  W.  Lichun,  &  K.  
Dehui  (2016,  December).  “A  Robust  Hand  
Gesture  Recognition   
Method   
via   
Convolutional   Neural   Network”.   In Digital   
Home   (ICDH),   2016   6th   International 
Conference on (pp. 64-67). IEEE. 
[16] H. Y. Lai and H. J. Lai, "Real-Time Dynamic 
Hand Gesture Recognition", IEEE Int. Symp. 
Comput. Consum. Control, no. 1, pp. 658-661, 
2014.  
[17]  
S. Ganapathyraju and D. Ph, Defects to 
Control an Industrial Robot, pp. 63-67, 2013. 
[18] L. Gu, X. Yuan and T. Ikenaga, "Hand gesture 
interface based on improved adaptive hand area 
detection and contour signature", IEEE Int. 
Symp. Intell. Signal Process. Commun. Syst. 
(ISPACS 2012) no. Ispacs, pp. 463-468.  
[19] A. S. Ghotkar, R. Khatal, S. Khupase, S. Asati 
and M. Hadap, "Hand gesture recognition for 
Indian Sign Language", IEEE Int. Conf. 
Comput. Commun. Informatics, pp. 1-4, 2012 
[20] G. R. S. Murthy and R. S. Jadon, "A Review 
Of Vision Based Hand Gestures Recognition", 
International Journal of
 Information 
Technology and Knowledge Management, vol. 
2, no. 2, pp. 405-410, July–December 2009. 
[21] https://www.researchgate.net/publication/3735
43883_Deep_Learning_in_Sign_Language_Re
cognition_A_Hybrid_Approach_for_the_Reco
gnition_of_Static_and_Dynamic_Signs 
[22] https://arxiv.org/ftp/arxiv/papers/2304/2304.10
256.pdf 
[23] https://www.irjmets.com/uploadedfiles/paper//i
ssue_5_may_2022/22341/final/fin_irjmets1651
928100.pdf 
[24] https://www.jetir.org/papers/JETIRFM06048.p
df 
[25] https://www.irjet.net/archives/V9/i6/IRJET
V9I6142.pdf 
337