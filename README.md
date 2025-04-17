Install roles:
```
ansible-galaxy role install geerlingguy.docker
```

To create Ansible user on my bare metal VPS instances:
```
ansible-playbook -i inventories/bootstrap.yml bootstrap.yml
```

To run Ansible playbook:
```
ansible-playbook -i inventories/main.yml playbook.yml --vault-password-file=<vault_password_file>
```