Install roles:
```
ansible-galaxy role install geerlingguy.docker
```

To create Ansible user on my bare metal VPS instances:
```
ansible-playbook -i inventories/bootstrap.yml bootstrap.yml --vault-password-file=<vault_password_file>
```

To run Ansible playbook:
```
ansible-playbook -i inventories/main.yml main.yml --vault-password-file=<vault_password_file>
```