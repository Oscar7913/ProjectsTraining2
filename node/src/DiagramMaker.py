from diagrams import Cluster,Diagram, Edge
from diagrams.aws.compute import EC2, ECS, EKS, Lambda
from diagrams.aws.database import RDS, ElastiCache, RDS, Redshift
from diagrams.aws.network import ELB, Route53
from diagrams.aws.integration import SQS
from diagrams.aws.storage import S3
import sys


def generate_diagram():
    try:
        filename = '/shared/diagram'
        print(sys.argv[1])
        # if len(sys.argv[1]) == 0: 
        #     with Diagram("Web Service", filename=filename, show=False):
        #         pass
        # else:
        code_to_execute = sys.argv[1]
        with Diagram("Web Service", filename=filename, show=False):
            exec(code_to_execute)   
        print('{"message": "ok", "status": 200}')
    except Exception as e:
        print('{"message":"' + str(e)+'", "status": 500}')


if __name__ == "__main__":
    generate_diagram()
