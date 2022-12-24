variable "availability_zones" {
  type        = list(string)
  description = "AWS Availability Zones"
  default = [
    "us-east-1a",
    "us-east-1b",
    "us-east-1c",
    "us-east-1e",
  ]
}

variable "key_pair" {
  description = "AWS EC2 Key Pair Pem"
  default     = "jenkins"
}

variable "ami" {
  description = "Amazon Linux 2 AMI"
  default     = "ami-0c3dda3deab25a563"
}

variable "instance_type" {
  description = "t2"
  default     = "t2.micro"
}

variable "iam_profile" {
  description = "Name of AWS IAM Profile"
  default     = "ec2ECSRole"
}

variable "asg_min" {
  description = "Min Instances"
  default     = 2
}

variable "asg_max" {
  description = "Max Instances"
  default     = 2
}

variable "asg_desired" {
  description = "AWS Desired capacity for ASG"
  default     = 2
}

variable "docker_img_name" {
  type        = string
  description = "Name of the docker image being deployed"  
  default     = "azax25547/scrappy-dev"
}

variable "docker_img_tag" {
  type        = string
  description = "The docker image TAG being deployed"  
  default     = "master"
}

