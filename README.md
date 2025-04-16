Install roles:
```
ansible-galaxy role install geerlingguy.docker
```

To run Ansible playbook:
```
ansible-playbook -i inventory.yml --extra-vars="@secrets.yml" playbook.yml --vault-password-file=<vault_password_file>
```