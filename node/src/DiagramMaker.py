# from diagrams import Cluster,Diagram, Edge
# from diagrams.aws.compute import EC2, ECS, EKS, Lambda
# from diagrams.aws.database import RDS, ElastiCache, RDS, Redshift
# from diagrams.aws.network import ELB, Route53
# from diagrams.aws.integration import SQS
# from diagrams.aws.storage import S3
import sys
import re
import json


def generate_diagram():
    try:
        filename, file_path = refactor_code(sys.argv[1])
        exec(filename)
        print('{"message":'+f'"{file_path}"'+', "status": 200}')
    except Exception as e:
        print('{"message":"' + str(e)+'", "status": 500}')


def refactor_code(code):
    pattern = r'(with Diagram\([^)]*,\s*filename\s*=\s*[\'\"])([^\'\"]+)([\'\"])'
    match = re.search(pattern, code)
    if match:
        filename_value = match.group(2)
        replacement = match.group(1) + "/shared/" + filename_value + match.group(3)
        return re.sub(pattern, replacement, code), filename_value
    else:
        return code, "empty"


if __name__ == "__main__":
    generate_diagram()

