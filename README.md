## clinical:hipaa  

HIPAA Policies and Procedures for Clinical Meteor Apps.  


==================================
#### Installation  

``meteor add clinical:hipaa-policies``


==================================
#### Policy Index

* [Introduction](policies/introduction.md)
* [Policy Management Policy](policies/policy_management_policy.md)
* [Risk Management Policy](policies/risk_management_policy.md)
* [Roles Policy](policies/roles_policy.md)
* [Data Management Policy](policies/data_management_policy.md)
* [System Access Policy](policies/systems_access_policy.md)
* [Auditing Policy](policies/auditing_policy.md)
* [Configuration Management Policy](policies/configuration_management_policy.md)
* [Facility Access Policy](policies/facility_access_policy.md)
* [Incident Response Policy](policies/incident_response_policy.md)
* [Breach Policy](policies/breach_policy.md)
* [Disaster Recover Policy](policies/disaster_recovery_policy.md)
* [Disposable Media Policy](policies/disposable_media_policy.md)
* [Intrusion Detection Policy](policies/ids_policy.md)
* [Vulnerability Scanning Policy](policies/vulnerability_scanning_policy.md)
* [Data Integrity Policy](policies/data_integrity_policy.md)
* [Data Retention Policy](policies/data_retention_policy.md)
* [Employees Policy](policies/employees_policy.md)
* [Approved Tools Policy](policies/approved_tools_policy.md)
* [3rd Party Policy](policies/policyTemplates/3rd_party_policy.md)
* [Key Definitions](policies/key_definitions.md)
* [HIPAA Business Associate Agreement (“BAA”)](policies/hipaa_business_associate_agreement.md)


==================================
#### API

````html
{{> thirdPartyPolicy}}
{{> approvedToolsPolicy}}
{{> auditingPolicy}}
{{> breachPolicy}}
{{> configurationManagementPolicy}}
{{> dataIntegrityPolicy}}
{{> dataManagementPolicy}}
{{> dataRetentionPolicy}}
{{> disasterRecoveryPolicy}}
{{> disposableMediaPolicy}}
{{> employeesPolicy}}
{{> facilityAccessPolicy}}
{{> hipaaBusinessAssociateAgreement}}
{{> idsPolicy}}
{{> incidentResponsePolicy}}
{{> keyDefinitions}}
{{> policyManagementPolicy}}
{{> riskManagementPolicy}}
{{> rolesPolicy}}
{{> systemAccessPolicy}}
{{> vulnerabilityScanningPolicy}}
````

Of course, any of these templates can be included in a route using Iron Router or Flux Router.  


==================================
#### Contributing  

We'll happily accept any pull-requests if policy-oriented folks want to go through and clean these up.


==================================
#### Licensing  

![MIT License](https://img.shields.io/badge/license-MIT-blue.svg)
