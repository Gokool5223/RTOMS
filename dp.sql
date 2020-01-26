-- MySQL dump 10.13  Distrib 8.0.17, for Linux (x86_64)
--
-- Host: localhost    Database: projectdb
-- ------------------------------------------------------
-- Server version	8.0.17

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `Application`
--

DROP TABLE IF EXISTS `Application`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Application` (
  `appId` int(11) NOT NULL AUTO_INCREMENT,
  `aadharNo` varchar(255) DEFAULT NULL,
  `address` varchar(255) DEFAULT NULL,
  `appDate` date DEFAULT NULL,
  `bloodGroup` varchar(255) DEFAULT NULL,
  `dob` date DEFAULT NULL,
  `document` longblob,
  `gender` varchar(255) DEFAULT NULL,
  `qualification` varchar(255) DEFAULT NULL,
  `status` varchar(255) DEFAULT NULL,
  `vehicleType` varchar(255) DEFAULT NULL,
  `user_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`appId`),
  KEY `FK610rj0lic91qt1fr08f0iikmh` (`user_id`),
  CONSTRAINT `FK610rj0lic91qt1fr08f0iikmh` FOREIGN KEY (`user_id`) REFERENCES `User` (`userId`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Application`
--

LOCK TABLES `Application` WRITE;
/*!40000 ALTER TABLE `Application` DISABLE KEYS */;
INSERT INTO `Application` VALUES (1,'2341678','Miraj','2020-01-02','O','1997-10-30',NULL,'FEMALE','BE',NULL,'TWOWHEELER',NULL),(11,'132165444','Miraj','2020-01-01','B','1997-11-12',NULL,'FEMALE','BE',NULL,'TWOWHEELER',1);
/*!40000 ALTER TABLE `Application` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Document_List`
--

DROP TABLE IF EXISTS `Document_List`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Document_List` (
  `docId` int(11) NOT NULL AUTO_INCREMENT,
  `doc_Name` varchar(255) DEFAULT NULL,
  `filepath` varchar(255) DEFAULT NULL,
  `userId` int(11) DEFAULT NULL,
  PRIMARY KEY (`docId`),
  KEY `FKoypofcwbyrqhmnlmeb1qf2rl0` (`userId`),
  CONSTRAINT `FKoypofcwbyrqhmnlmeb1qf2rl0` FOREIGN KEY (`userId`) REFERENCES `User` (`userId`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Document_List`
--

LOCK TABLES `Document_List` WRITE;
/*!40000 ALTER TABLE `Document_List` DISABLE KEYS */;
INSERT INTO `Document_List` VALUES (1,'download.jpeg','download.jpeg',7),(2,'favicon.ico','favicon.ico',7),(3,'download.jpeg','download.jpeg',1),(4,'190840820060.pdf','190840820060.pdf',1),(5,'images2.jpeg','images2.jpeg',1);
/*!40000 ALTER TABLE `Document_List` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `License`
--

DROP TABLE IF EXISTS `License`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `License` (
  `llrId` int(11) NOT NULL AUTO_INCREMENT,
  `expiryDate` date DEFAULT NULL,
  `issueDate` date DEFAULT NULL,
  `app_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`llrId`),
  KEY `FKpixlm1twyw3pbktbac3ognuu4` (`app_id`),
  CONSTRAINT `FKpixlm1twyw3pbktbac3ognuu4` FOREIGN KEY (`app_id`) REFERENCES `Application` (`appId`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `License`
--

LOCK TABLES `License` WRITE;
/*!40000 ALTER TABLE `License` DISABLE KEYS */;
INSERT INTO `License` VALUES (1,'2020-07-10','2020-01-10',1);
/*!40000 ALTER TABLE `License` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Otp`
--

DROP TABLE IF EXISTS `Otp`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Otp` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `otp` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Otp`
--

LOCK TABLES `Otp` WRITE;
/*!40000 ALTER TABLE `Otp` DISABLE KEYS */;
/*!40000 ALTER TABLE `Otp` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Question`
--

DROP TABLE IF EXISTS `Question`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Question` (
  `qid` int(11) NOT NULL AUTO_INCREMENT,
  `answerKey` int(11) DEFAULT NULL,
  `option1` varchar(255) DEFAULT NULL,
  `option2` varchar(255) DEFAULT NULL,
  `option3` varchar(255) DEFAULT NULL,
  `option4` varchar(255) DEFAULT NULL,
  `question` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`qid`)
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Question`
--

LOCK TABLES `Question` WRITE;
/*!40000 ALTER TABLE `Question` DISABLE KEYS */;
INSERT INTO `Question` VALUES (1,1,'a) From the right side of the vehicle','b) From the left side of the vehicle','c) By continuous honking','d) By without horning right side','From which side can you overtake the vehicle in front of you?'),(2,3,'a) Stop ','b) Go','c) Slow Down','d) Wait','What does a yellow traffic light denote?'),(3,3,'a) Heavy vehicles','b) Cyclists','c) Pedestrians','d) None of the Above','Zebra Crossing is meant for?'),(4,2,'a) Press horn continuously','b) Reduce your speed and be alert','c) Speed up and leave quickly','d) Both a & c',' What should you do while you are driving near a school?'),(5,2,'a) Regional language','b) In English with Arabic numerals','c) In Roman language','d) In any readable format','In what format should the numbers on your vehicle’s number plate be written?'),(6,4,'a) Circle','d) Square','c) Rectangle','d) Triangle',' Traffic sign signaling ‘caution’ is in which shape?'),(7,1,'a) Learner’s license is valid for 6 months','b) Learner’s license is valid for a year','c) Learner’s license is valid for a month','d) Learner’s license is valid for 2 month','What is the validity of a learner’s license?'),(8,3,'a) Auto','b) Bus','c) Ambulance','d) Truck','Which type of vehicles should be given a free pass?'),(9,1,'a) Stop your vehicle and let the person cross','b) Call out to the person','c) Shift your lane','d) None of the Above',' What should you do if you spot a blind person who is about to cross the road?'),(10,2,'a) In an emergency','b) Never','c) If you are driving for a short distance','d) None of the Above',' When is it acceptable to Drink and Drive?'),(11,1,'a)  0 days','b) 15 Days','c) 10 Days','d) 20 Days','In case of an expired car insurance policy, for how many days can you drive your vehicle legally without renewing it?'),(12,2,'a) Inform the police','b) Check if the pedestrian is all right and help','c) Drive away from the location','d) None of the Above',' What should you do if you accidentally hit a pedestrian with your vehicle?'),(13,3,'a) Yes','b) Yes, only in daylight','c) No','d) Both a & b','Can you overtake a vehicle in front of you on a bend?'),(14,2,'a) Life insurance','b) Third-party Liability Insurance','c) Comprehensive Vehicle Insurance','d) None of the Above','Which type of vehicle insurance is mandatory?'),(15,1,'a) Reverse','b) Overtake','c) Park','d) None of the Above','You shouldn’t do the following on a one-way road'),(16,1,'a) Yes','b) No','c) Only if it is a SUV','d) None of the Above','Is vehicle registration necessary for a private vehicle?'),(17,2,'a) It is evening','b) There is mist','c) There is traffic','d) None of the Above','Fog lamps should be used when'),(18,3,'a) At night','b) On public holidays','c) Never','d) All Of the above',' When is it acceptable to park your vehicle in front of a hospital?'),(19,2,'a) Wait until the train passes','b) Stop the vehicle on left hand side of the road, approach the track and ensure that there is no train or trolley coming from any side prior to crossing.','c) Press horn and cross the track at the earliest','d) None of the Above','If a vehicle approaches a railway crossing that is not guarded and the vehicle wants to proceed, the driver should'),(20,3,'a) Extend the left hand and give the left turn signal','b) Not give any signal','c) Extend the right hand and give the left turn signal','d) None of the Above','If a driver of a two wheeler is turning to the left, he/she should');
/*!40000 ALTER TABLE `Question` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Response`
--

DROP TABLE IF EXISTS `Response`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Response` (
  `responseId` int(11) NOT NULL AUTO_INCREMENT,
  `questionId` int(11) DEFAULT NULL,
  `submittedAns` int(11) DEFAULT NULL,
  `userId` int(11) DEFAULT NULL,
  PRIMARY KEY (`responseId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Response`
--

LOCK TABLES `Response` WRITE;
/*!40000 ALTER TABLE `Response` DISABLE KEYS */;
/*!40000 ALTER TABLE `Response` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ScheduleTest`
--

DROP TABLE IF EXISTS `ScheduleTest`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `ScheduleTest` (
  `scheduleId` int(11) NOT NULL AUTO_INCREMENT,
  `testDate` datetime DEFAULT NULL,
  `testTime` varchar(255) DEFAULT NULL,
  `userSchT_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`scheduleId`),
  KEY `FKbx7jhgir550a4dkgkip94n42o` (`userSchT_id`),
  CONSTRAINT `FKbx7jhgir550a4dkgkip94n42o` FOREIGN KEY (`userSchT_id`) REFERENCES `User` (`userId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ScheduleTest`
--

LOCK TABLES `ScheduleTest` WRITE;
/*!40000 ALTER TABLE `ScheduleTest` DISABLE KEYS */;
/*!40000 ALTER TABLE `ScheduleTest` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `TestResult`
--

DROP TABLE IF EXISTS `TestResult`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `TestResult` (
  `resultId` int(11) NOT NULL AUTO_INCREMENT,
  `score` int(11) DEFAULT NULL,
  `user_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`resultId`),
  KEY `FK41ftv8eff4or21xr4fn44r334` (`user_id`),
  CONSTRAINT `FK41ftv8eff4or21xr4fn44r334` FOREIGN KEY (`user_id`) REFERENCES `User` (`userId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `TestResult`
--

LOCK TABLES `TestResult` WRITE;
/*!40000 ALTER TABLE `TestResult` DISABLE KEYS */;
/*!40000 ALTER TABLE `TestResult` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `User`
--

DROP TABLE IF EXISTS `User`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `User` (
  `userId` int(11) NOT NULL AUTO_INCREMENT,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `role` varchar(255) DEFAULT NULL,
  `userName` varchar(255) NOT NULL,
  PRIMARY KEY (`userId`),
  UNIQUE KEY `UK_e6gkqunxajvyxl5uctpl2vl2p` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `User`
--

LOCK TABLES `User` WRITE;
/*!40000 ALTER TABLE `User` DISABLE KEYS */;
INSERT INTO `User` VALUES (1,'aishwaryamurkute2018@gmail.com','1234','USER','Aishwarya'),(2,'gokulpaithane83@gmail.com','4444','ADMIN','Gokul'),(4,'vikaspurohit08@gmail.com','2222','RTO','Vikas'),(5,'varsha.bansode@yahoo.com','2222','RTO','Varsha'),(6,'deepikabattewar1997@gmail.com','5555','RTO','Deepika '),(7,'akshaynadda@gmail.com','1111','USER','Akshay'),(8,'omkarapatil333@gmail.com','1234','USER','Omkar');
/*!40000 ALTER TABLE `User` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `answer_response`
--

DROP TABLE IF EXISTS `answer_response`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `answer_response` (
  `u_id` int(11) NOT NULL,
  `responses_responseId` int(11) NOT NULL,
  UNIQUE KEY `UK_hj96j6mkmrvw781sg88bk5lok` (`responses_responseId`),
  KEY `FK4o7ifdktoql824po8y2j254n5` (`u_id`),
  CONSTRAINT `FK4o7ifdktoql824po8y2j254n5` FOREIGN KEY (`u_id`) REFERENCES `User` (`userId`),
  CONSTRAINT `FKgr4idm2bf072a55djlvwiaesc` FOREIGN KEY (`responses_responseId`) REFERENCES `Response` (`responseId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `answer_response`
--

LOCK TABLES `answer_response` WRITE;
/*!40000 ALTER TABLE `answer_response` DISABLE KEYS */;
/*!40000 ALTER TABLE `answer_response` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `test_result`
--

DROP TABLE IF EXISTS `test_result`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `test_result` (
  `resultId` int(11) NOT NULL AUTO_INCREMENT,
  `score` int(11) DEFAULT NULL,
  `user_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`resultId`),
  KEY `FKsxrpxyok2xhpaadx9hu10c5ga` (`user_id`),
  CONSTRAINT `FKsxrpxyok2xhpaadx9hu10c5ga` FOREIGN KEY (`user_id`) REFERENCES `User` (`userId`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `test_result`
--

LOCK TABLES `test_result` WRITE;
/*!40000 ALTER TABLE `test_result` DISABLE KEYS */;
INSERT INTO `test_result` VALUES (1,18,1),(2,16,7);
/*!40000 ALTER TABLE `test_result` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-01-26 22:29:29
