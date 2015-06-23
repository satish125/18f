


-- Table structure for table `login_attempts`
CREATE TABLE IF NOT EXISTS `login_attempts` (
	`user_id` int(11) NOT NULL,
	`created` timestamp NOT NULL,
	`time` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;



-- Table structure for table `members`
CREATE TABLE IF NOT EXISTS `members` (
	`id` int(11) NOT NULL AUTO_INCREMENT,
	`datecreated` timestamp NOT NULL,
	`fname` varchar(55) NOT NULL,
	`lname` varchar(55) NOT NULL,
	`username` varchar(55) NOT NULL,
	`email` varchar(55) NOT NULL,
	`city` varchar(90) NOT NULL,
	`state` varchar(55) NOT NULL,
	`zip` varchar(25) NOT NULL,
	`usertype` varchar(25) NOT NULL,
	`password` char(128) NOT NULL,
	`salt` char(128) NOT NULL,
	PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 AUTO_INCREMENT=3;



-- Dumping data for table `members`
INSERT INTO `members` (`id`, `datecreated`, `fname`, `lname`, `username`, `email`, `city`, `state`, `zip`, `usertype`, `password`, `salt`) VALUES
(1, '2015-06-23 12:00:01', 'Test', 'User1', 'test1', 'test1@ntconcepts.com', 'Vienna', 'VA', '22304', 'member', '00807432eae173f652f2064bdca1b61b290b52d40e429a7d295d76a71084aa96c0233b82f1feac45529e0726559645acaed6f3ae58a286b9f075916ebf66cacc', 'f9aab579fc1b41ed0c44fe4ecdbfcdb4cb99b9023abb241a6db833288f4eea3c02f76e0d35204a8695077dcf81932aa59006423976224be0390395bae152d4ef'),
(2, '2015-06-23 12:00:02', 'Test', 'User2', 'test2', 'test2@ntconcepts.com', 'Vienna', 'VA', '22304', 'member', 'afe42eba98c7fbb7abf6870043d1ebb3d8fc9a8402ebb5a46afe324d72c173e042b8160101d1e85d990a2f80d327abe6a61ced0308862980fb2d4c5fd41f9eef', 'd3586c477b4e9c1409ca8e4d24451ec596c6f130c780eb78ac4fff52705848030d0ad327f3acc65751d77b282395b850abf128b579a4e48e983073cfe8ec54ac');


