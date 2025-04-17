all:
  vars:
    ansible_user: ansible
    ansible_ssh_private_key_file: /tmp/ansible_private_key
    ansible_python_interpreter: /usr/bin/python3
app:
  hosts:
    {{APP_HOSTS}}
load_balancer:
  hosts:
    {{LOAD_BALANCER_HOST}}
