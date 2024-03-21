from diagrams import Diagram
from diagrams.aws.compute import EC2
from diagrams.aws.database import RDS
from diagrams.aws.network import ELB
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
