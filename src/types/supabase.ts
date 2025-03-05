export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      admin_users: {
        Row: {
          created_at: string
          id: string
          role: string
          user_id: string
        }
        Insert: {
          created_at?: string
          id?: string
          role: string
          user_id: string
        }
        Update: {
          created_at?: string
          id?: string
          role?: string
          user_id?: string
        }
        Relationships: []
      }
      business_owners: {
        Row: {
          address_proof_url: string | null
          created_at: string
          date_of_birth: string
          full_name: string
          id: string
          nationality: string
          organization_id: string | null
          ownership_percentage: number
          passport_url: string | null
          risk_score: number | null
          verification_status: string | null
        }
        Insert: {
          address_proof_url?: string | null
          created_at?: string
          date_of_birth: string
          full_name: string
          id?: string
          nationality: string
          organization_id?: string | null
          ownership_percentage: number
          passport_url?: string | null
          risk_score?: number | null
          verification_status?: string | null
        }
        Update: {
          address_proof_url?: string | null
          created_at?: string
          date_of_birth?: string
          full_name?: string
          id?: string
          nationality?: string
          organization_id?: string | null
          ownership_percentage?: number
          passport_url?: string | null
          risk_score?: number | null
          verification_status?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "business_owners_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "organization_details"
            referencedColumns: ["id"]
          },
        ]
      }
      company_details: {
        Row: {
          company_name: string
          company_type: string
          created_at: string
          id: string
          is_regulated: boolean | null
          registration_number: string | null
          regulatory_status: string | null
          updated_at: string
          user_id: string
        }
        Insert: {
          company_name: string
          company_type: string
          created_at?: string
          id?: string
          is_regulated?: boolean | null
          registration_number?: string | null
          regulatory_status?: string | null
          updated_at?: string
          user_id: string
        }
        Update: {
          company_name?: string
          company_type?: string
          created_at?: string
          id?: string
          is_regulated?: boolean | null
          registration_number?: string | null
          regulatory_status?: string | null
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      company_directors: {
        Row: {
          address_document_id: string | null
          company_id: string
          created_at: string
          full_name: string
          id: string
          passport_document_id: string | null
          position: string
        }
        Insert: {
          address_document_id?: string | null
          company_id: string
          created_at?: string
          full_name: string
          id?: string
          passport_document_id?: string | null
          position: string
        }
        Update: {
          address_document_id?: string | null
          company_id?: string
          created_at?: string
          full_name?: string
          id?: string
          passport_document_id?: string | null
          position?: string
        }
        Relationships: [
          {
            foreignKeyName: "company_directors_address_document_id_fkey"
            columns: ["address_document_id"]
            isOneToOne: false
            referencedRelation: "kyc_documents"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "company_directors_company_id_fkey"
            columns: ["company_id"]
            isOneToOne: false
            referencedRelation: "company_details"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "company_directors_passport_document_id_fkey"
            columns: ["passport_document_id"]
            isOneToOne: false
            referencedRelation: "kyc_documents"
            referencedColumns: ["id"]
          },
        ]
      }
      company_shareholders: {
        Row: {
          address_document_id: string | null
          company_id: string
          created_at: string
          full_name: string
          id: string
          ownership_percentage: number
          passport_document_id: string | null
        }
        Insert: {
          address_document_id?: string | null
          company_id: string
          created_at?: string
          full_name: string
          id?: string
          ownership_percentage: number
          passport_document_id?: string | null
        }
        Update: {
          address_document_id?: string | null
          company_id?: string
          created_at?: string
          full_name?: string
          id?: string
          ownership_percentage?: number
          passport_document_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "company_shareholders_address_document_id_fkey"
            columns: ["address_document_id"]
            isOneToOne: false
            referencedRelation: "kyc_documents"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "company_shareholders_company_id_fkey"
            columns: ["company_id"]
            isOneToOne: false
            referencedRelation: "company_details"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "company_shareholders_passport_document_id_fkey"
            columns: ["passport_document_id"]
            isOneToOne: false
            referencedRelation: "kyc_documents"
            referencedColumns: ["id"]
          },
        ]
      }
      compliance_documents: {
        Row: {
          created_at: string
          document_type: string
          document_url: string
          guardian_verification: Json | null
          id: string
          organization_id: string | null
          risk_classification: string | null
          verification_status: string | null
        }
        Insert: {
          created_at?: string
          document_type: string
          document_url: string
          guardian_verification?: Json | null
          id?: string
          organization_id?: string | null
          risk_classification?: string | null
          verification_status?: string | null
        }
        Update: {
          created_at?: string
          document_type?: string
          document_url?: string
          guardian_verification?: Json | null
          id?: string
          organization_id?: string | null
          risk_classification?: string | null
          verification_status?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "compliance_documents_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "organization_details"
            referencedColumns: ["id"]
          },
        ]
      }
      compliance_rules: {
        Row: {
          created_at: string
          eligible_jurisdictions: string[]
          id: string
          issuer_id: string
          max_investors: number | null
          title: string
          transfer_restrictions: Json | null
          updated_at: string
        }
        Insert: {
          created_at?: string
          eligible_jurisdictions?: string[]
          id?: string
          issuer_id: string
          max_investors?: number | null
          title: string
          transfer_restrictions?: Json | null
          updated_at?: string
        }
        Update: {
          created_at?: string
          eligible_jurisdictions?: string[]
          id?: string
          issuer_id?: string
          max_investors?: number | null
          title?: string
          transfer_restrictions?: Json | null
          updated_at?: string
        }
        Relationships: []
      }
      email_templates: {
        Row: {
          created_at: string | null
          html_content: string
          id: string
          name: string
          subject: string
        }
        Insert: {
          created_at?: string | null
          html_content: string
          id?: string
          name: string
          subject: string
        }
        Update: {
          created_at?: string | null
          html_content?: string
          id?: string
          name?: string
          subject?: string
        }
        Relationships: []
      }
      investor_documents: {
        Row: {
          created_at: string
          document_type: string
          document_url: string
          id: string
          metadata: Json | null
          user_id: string
          verification_status:
            | Database["public"]["Enums"]["verification_status"]
            | null
          verified_at: string | null
        }
        Insert: {
          created_at?: string
          document_type: string
          document_url: string
          id?: string
          metadata?: Json | null
          user_id: string
          verification_status?:
            | Database["public"]["Enums"]["verification_status"]
            | null
          verified_at?: string | null
        }
        Update: {
          created_at?: string
          document_type?: string
          document_url?: string
          id?: string
          metadata?: Json | null
          user_id?: string
          verification_status?:
            | Database["public"]["Enums"]["verification_status"]
            | null
          verified_at?: string | null
        }
        Relationships: []
      }
      investor_profiles: {
        Row: {
          chain_id: string | null
          country: string
          created_at: string
          date_of_birth: string | null
          financial_profile: Json | null
          id: string
          investment_profile: Json | null
          investor_type: string
          is_qualified: boolean | null
          nationality: string | null
          residency_address: Json | null
          updated_at: string
          user_id: string
        }
        Insert: {
          chain_id?: string | null
          country: string
          created_at?: string
          date_of_birth?: string | null
          financial_profile?: Json | null
          id?: string
          investment_profile?: Json | null
          investor_type: string
          is_qualified?: boolean | null
          nationality?: string | null
          residency_address?: Json | null
          updated_at?: string
          user_id: string
        }
        Update: {
          chain_id?: string | null
          country?: string
          created_at?: string
          date_of_birth?: string | null
          financial_profile?: Json | null
          id?: string
          investment_profile?: Json | null
          investor_type?: string
          is_qualified?: boolean | null
          nationality?: string | null
          residency_address?: Json | null
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      investor_wallets: {
        Row: {
          created_at: string
          id: string
          is_verified: boolean | null
          user_id: string
          wallet_address: string
          wallet_type: string
        }
        Insert: {
          created_at?: string
          id?: string
          is_verified?: boolean | null
          user_id: string
          wallet_address: string
          wallet_type: string
        }
        Update: {
          created_at?: string
          id?: string
          is_verified?: boolean | null
          user_id?: string
          wallet_address?: string
          wallet_type?: string
        }
        Relationships: []
      }
      investors: {
        Row: {
          accreditation_status:
            | Database["public"]["Enums"]["accreditation_status"]
            | null
          country: string | null
          created_at: string | null
          email: string
          investor_id: string
          kyc_date: string | null
          kyc_status: Database["public"]["Enums"]["kyc_status"] | null
          name: string
          status: Database["public"]["Enums"]["investor_status"] | null
          type: Database["public"]["Enums"]["investor_type"]
          updated_at: string | null
          wallet_address: string | null
        }
        Insert: {
          accreditation_status?:
            | Database["public"]["Enums"]["accreditation_status"]
            | null
          country?: string | null
          created_at?: string | null
          email: string
          investor_id?: string
          kyc_date?: string | null
          kyc_status?: Database["public"]["Enums"]["kyc_status"] | null
          name: string
          status?: Database["public"]["Enums"]["investor_status"] | null
          type: Database["public"]["Enums"]["investor_type"]
          updated_at?: string | null
          wallet_address?: string | null
        }
        Update: {
          accreditation_status?:
            | Database["public"]["Enums"]["accreditation_status"]
            | null
          country?: string | null
          created_at?: string | null
          email?: string
          investor_id?: string
          kyc_date?: string | null
          kyc_status?: Database["public"]["Enums"]["kyc_status"] | null
          name?: string
          status?: Database["public"]["Enums"]["investor_status"] | null
          type?: Database["public"]["Enums"]["investor_type"]
          updated_at?: string | null
          wallet_address?: string | null
        }
        Relationships: []
      }
      issuer_documents: {
        Row: {
          created_at: string
          document_type: string
          document_url: string
          id: string
          metadata: Json | null
          user_id: string
          verification_status:
            | Database["public"]["Enums"]["verification_status"]
            | null
          verified_at: string | null
        }
        Insert: {
          created_at?: string
          document_type: string
          document_url: string
          id?: string
          metadata?: Json | null
          user_id: string
          verification_status?:
            | Database["public"]["Enums"]["verification_status"]
            | null
          verified_at?: string | null
        }
        Update: {
          created_at?: string
          document_type?: string
          document_url?: string
          id?: string
          metadata?: Json | null
          user_id?: string
          verification_status?:
            | Database["public"]["Enums"]["verification_status"]
            | null
          verified_at?: string | null
        }
        Relationships: []
      }
      issuer_profiles: {
        Row: {
          business_description: string | null
          company_name: string
          company_type: string
          created_at: string
          id: string
          is_regulated: boolean | null
          jurisdiction: string
          metadata: Json | null
          registration_number: string | null
          regulatory_status: string | null
          user_id: string
        }
        Insert: {
          business_description?: string | null
          company_name: string
          company_type: string
          created_at?: string
          id?: string
          is_regulated?: boolean | null
          jurisdiction: string
          metadata?: Json | null
          registration_number?: string | null
          regulatory_status?: string | null
          user_id: string
        }
        Update: {
          business_description?: string | null
          company_name?: string
          company_type?: string
          created_at?: string
          id?: string
          is_regulated?: boolean | null
          jurisdiction?: string
          metadata?: Json | null
          registration_number?: string | null
          regulatory_status?: string | null
          user_id?: string
        }
        Relationships: []
      }
      issuer_registrations: {
        Row: {
          business_email: string
          country: string
          created_at: string
          email_verified: boolean | null
          id: string
          metadata: Json | null
          organization_name: string
          registration_status: string | null
          terms_accepted: boolean | null
          user_id: string
        }
        Insert: {
          business_email: string
          country: string
          created_at?: string
          email_verified?: boolean | null
          id?: string
          metadata?: Json | null
          organization_name: string
          registration_status?: string | null
          terms_accepted?: boolean | null
          user_id: string
        }
        Update: {
          business_email?: string
          country?: string
          created_at?: string
          email_verified?: boolean | null
          id?: string
          metadata?: Json | null
          organization_name?: string
          registration_status?: string | null
          terms_accepted?: boolean | null
          user_id?: string
        }
        Relationships: []
      }
      issuer_submissions: {
        Row: {
          compliance_status: Json | null
          guardian_validation: Json | null
          id: string
          rejection_reason: string | null
          review_stages: Json | null
          reviewed_at: string | null
          reviewer_id: string | null
          status: string
          submission_date: string
          user_id: string
        }
        Insert: {
          compliance_status?: Json | null
          guardian_validation?: Json | null
          id?: string
          rejection_reason?: string | null
          review_stages?: Json | null
          reviewed_at?: string | null
          reviewer_id?: string | null
          status?: string
          submission_date?: string
          user_id: string
        }
        Update: {
          compliance_status?: Json | null
          guardian_validation?: Json | null
          id?: string
          rejection_reason?: string | null
          review_stages?: Json | null
          reviewed_at?: string | null
          reviewer_id?: string | null
          status?: string
          submission_date?: string
          user_id?: string
        }
        Relationships: []
      }
      issuer_verification_codes: {
        Row: {
          code: string
          created_at: string
          email: string
          expires_at: string
          id: string
          used: boolean | null
          user_id: string
        }
        Insert: {
          code: string
          created_at?: string
          email: string
          expires_at: string
          id?: string
          used?: boolean | null
          user_id: string
        }
        Update: {
          code?: string
          created_at?: string
          email?: string
          expires_at?: string
          id?: string
          used?: boolean | null
          user_id?: string
        }
        Relationships: []
      }
      issuer_wallets: {
        Row: {
          compliance_status: Json | null
          created_at: string
          id: string
          is_verified: boolean | null
          is_whitelisted: boolean | null
          metadata: Json | null
          risk_score: number | null
          user_id: string
          wallet_address: string
          wallet_type: Database["public"]["Enums"]["wallet_type"]
        }
        Insert: {
          compliance_status?: Json | null
          created_at?: string
          id?: string
          is_verified?: boolean | null
          is_whitelisted?: boolean | null
          metadata?: Json | null
          risk_score?: number | null
          user_id: string
          wallet_address: string
          wallet_type: Database["public"]["Enums"]["wallet_type"]
        }
        Update: {
          compliance_status?: Json | null
          created_at?: string
          id?: string
          is_verified?: boolean | null
          is_whitelisted?: boolean | null
          metadata?: Json | null
          risk_score?: number | null
          user_id?: string
          wallet_address?: string
          wallet_type?: Database["public"]["Enums"]["wallet_type"]
        }
        Relationships: []
      }
      kyc_documents: {
        Row: {
          created_at: string
          document_type: string
          document_url: string
          id: string
          metadata: Json | null
          updated_at: string
          user_id: string
          verification_status: string
        }
        Insert: {
          created_at?: string
          document_type: string
          document_url: string
          id?: string
          metadata?: Json | null
          updated_at?: string
          user_id: string
          verification_status?: string
        }
        Update: {
          created_at?: string
          document_type?: string
          document_url?: string
          id?: string
          metadata?: Json | null
          updated_at?: string
          user_id?: string
          verification_status?: string
        }
        Relationships: []
      }
      legal_agreements: {
        Row: {
          agreement_type: string
          content: string
          created_at: string
          id: string
          title: string
          version: string
        }
        Insert: {
          agreement_type: string
          content: string
          created_at?: string
          id?: string
          title: string
          version: string
        }
        Update: {
          agreement_type?: string
          content?: string
          created_at?: string
          id?: string
          title?: string
          version?: string
        }
        Relationships: []
      }
      notifications: {
        Row: {
          created_at: string
          id: string
          is_read: boolean
          message: string
          title: string
          type: string
          user_id: string
        }
        Insert: {
          created_at?: string
          id?: string
          is_read?: boolean
          message: string
          title: string
          type: string
          user_id: string
        }
        Update: {
          created_at?: string
          id?: string
          is_read?: boolean
          message?: string
          title?: string
          type?: string
          user_id?: string
        }
        Relationships: []
      }
      onboarding_status: {
        Row: {
          created_at: string
          current_step: number
          id: string
          is_completed: boolean
          role: string
          updated_at: string
          user_id: string
        }
        Insert: {
          created_at?: string
          current_step?: number
          id?: string
          is_completed?: boolean
          role: string
          updated_at?: string
          user_id: string
        }
        Update: {
          created_at?: string
          current_step?: number
          id?: string
          is_completed?: boolean
          role?: string
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      organization_details: {
        Row: {
          business_type: string
          created_at: string
          entity_structure: string
          external_representatives: string | null
          governance_model: string
          id: string
          is_regulated: boolean | null
          issuer_type: string[]
          jurisdiction: string
          legal_name: string
          registration_number: string | null
          regulatory_details: Json | null
          risk_classification: string
          user_id: string
        }
        Insert: {
          business_type: string
          created_at?: string
          entity_structure: string
          external_representatives?: string | null
          governance_model: string
          id?: string
          is_regulated?: boolean | null
          issuer_type: string[]
          jurisdiction: string
          legal_name: string
          registration_number?: string | null
          regulatory_details?: Json | null
          risk_classification: string
          user_id: string
        }
        Update: {
          business_type?: string
          created_at?: string
          entity_structure?: string
          external_representatives?: string | null
          governance_model?: string
          id?: string
          is_regulated?: boolean | null
          issuer_type?: string[]
          jurisdiction?: string
          legal_name?: string
          registration_number?: string | null
          regulatory_details?: Json | null
          risk_classification?: string
          user_id?: string
        }
        Relationships: []
      }
      organization_directors: {
        Row: {
          address_proof_url: string | null
          created_at: string
          full_name: string
          id: string
          organization_id: string | null
          passport_url: string | null
          position: string
          verification_status: string | null
        }
        Insert: {
          address_proof_url?: string | null
          created_at?: string
          full_name: string
          id?: string
          organization_id?: string | null
          passport_url?: string | null
          position: string
          verification_status?: string | null
        }
        Update: {
          address_proof_url?: string | null
          created_at?: string
          full_name?: string
          id?: string
          organization_id?: string | null
          passport_url?: string | null
          position?: string
          verification_status?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "organization_directors_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "issuer_profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      organization_documents: {
        Row: {
          created_at: string
          document_type: Database["public"]["Enums"]["document_type"]
          file_name: string
          file_size: number
          file_url: string
          id: string
          metadata: Json | null
          mime_type: string
          organization_id: string | null
          verification_notes: string | null
          verification_status: string | null
          verified_at: string | null
          verified_by: string | null
        }
        Insert: {
          created_at?: string
          document_type: Database["public"]["Enums"]["document_type"]
          file_name: string
          file_size: number
          file_url: string
          id?: string
          metadata?: Json | null
          mime_type: string
          organization_id?: string | null
          verification_notes?: string | null
          verification_status?: string | null
          verified_at?: string | null
          verified_by?: string | null
        }
        Update: {
          created_at?: string
          document_type?: Database["public"]["Enums"]["document_type"]
          file_name?: string
          file_size?: number
          file_url?: string
          id?: string
          metadata?: Json | null
          mime_type?: string
          organization_id?: string | null
          verification_notes?: string | null
          verification_status?: string | null
          verified_at?: string | null
          verified_by?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "organization_documents_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "issuer_profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      organization_shareholders: {
        Row: {
          address_proof_url: string | null
          created_at: string
          full_name: string
          id: string
          organization_id: string | null
          ownership_percentage: number
          passport_url: string | null
          verification_status: string | null
        }
        Insert: {
          address_proof_url?: string | null
          created_at?: string
          full_name: string
          id?: string
          organization_id?: string | null
          ownership_percentage: number
          passport_url?: string | null
          verification_status?: string | null
        }
        Update: {
          address_proof_url?: string | null
          created_at?: string
          full_name?: string
          id?: string
          organization_id?: string | null
          ownership_percentage?: number
          passport_url?: string | null
          verification_status?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "organization_shareholders_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "issuer_profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      risk_assessments: {
        Row: {
          assessment_date: string
          created_at: string
          id: string
          next_review_date: string | null
          organization_id: string | null
          required_approvals: Json | null
          risk_factors: Json | null
          risk_level: string
          risk_type: string
        }
        Insert: {
          assessment_date?: string
          created_at?: string
          id?: string
          next_review_date?: string | null
          organization_id?: string | null
          required_approvals?: Json | null
          risk_factors?: Json | null
          risk_level: string
          risk_type: string
        }
        Update: {
          assessment_date?: string
          created_at?: string
          id?: string
          next_review_date?: string | null
          organization_id?: string | null
          required_approvals?: Json | null
          risk_factors?: Json | null
          risk_level?: string
          risk_type?: string
        }
        Relationships: [
          {
            foreignKeyName: "risk_assessments_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "organization_details"
            referencedColumns: ["id"]
          },
        ]
      }
      rules: {
        Row: {
          created_at: string | null
          created_by: string
          rule_details: Json
          rule_id: string
          rule_name: string
          rule_type: string
          status: Database["public"]["Enums"]["rule_status"] | null
          updated_at: string | null
        }
        Insert: {
          created_at?: string | null
          created_by: string
          rule_details?: Json
          rule_id?: string
          rule_name: string
          rule_type: string
          status?: Database["public"]["Enums"]["rule_status"] | null
          updated_at?: string | null
        }
        Update: {
          created_at?: string | null
          created_by?: string
          rule_details?: Json
          rule_id?: string
          rule_name?: string
          rule_type?: string
          status?: Database["public"]["Enums"]["rule_status"] | null
          updated_at?: string | null
        }
        Relationships: []
      }
      spv_directors: {
        Row: {
          address_proof_url: string | null
          created_at: string
          full_name: string
          id: string
          metadata: Json | null
          passport_url: string | null
          position: string
          spv_id: string
          verification_status:
            | Database["public"]["Enums"]["verification_status"]
            | null
        }
        Insert: {
          address_proof_url?: string | null
          created_at?: string
          full_name: string
          id?: string
          metadata?: Json | null
          passport_url?: string | null
          position: string
          spv_id: string
          verification_status?:
            | Database["public"]["Enums"]["verification_status"]
            | null
        }
        Update: {
          address_proof_url?: string | null
          created_at?: string
          full_name?: string
          id?: string
          metadata?: Json | null
          passport_url?: string | null
          position?: string
          spv_id?: string
          verification_status?:
            | Database["public"]["Enums"]["verification_status"]
            | null
        }
        Relationships: [
          {
            foreignKeyName: "spv_directors_spv_id_fkey"
            columns: ["spv_id"]
            isOneToOne: false
            referencedRelation: "spv_entities"
            referencedColumns: ["id"]
          },
        ]
      }
      spv_documents: {
        Row: {
          created_at: string
          document_type: string
          document_url: string
          id: string
          metadata: Json | null
          spv_id: string
          verification_status:
            | Database["public"]["Enums"]["verification_status"]
            | null
          verified_at: string | null
        }
        Insert: {
          created_at?: string
          document_type: string
          document_url: string
          id?: string
          metadata?: Json | null
          spv_id: string
          verification_status?:
            | Database["public"]["Enums"]["verification_status"]
            | null
          verified_at?: string | null
        }
        Update: {
          created_at?: string
          document_type?: string
          document_url?: string
          id?: string
          metadata?: Json | null
          spv_id?: string
          verification_status?:
            | Database["public"]["Enums"]["verification_status"]
            | null
          verified_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "spv_documents_spv_id_fkey"
            columns: ["spv_id"]
            isOneToOne: false
            referencedRelation: "spv_entities"
            referencedColumns: ["id"]
          },
        ]
      }
      spv_entities: {
        Row: {
          created_at: string
          id: string
          issuer_id: string
          jurisdiction: string
          metadata: Json | null
          name: string
          registration_number: string | null
          status: string
          structure_type: string
        }
        Insert: {
          created_at?: string
          id?: string
          issuer_id: string
          jurisdiction: string
          metadata?: Json | null
          name: string
          registration_number?: string | null
          status?: string
          structure_type: string
        }
        Update: {
          created_at?: string
          id?: string
          issuer_id?: string
          jurisdiction?: string
          metadata?: Json | null
          name?: string
          registration_number?: string | null
          status?: string
          structure_type?: string
        }
        Relationships: [
          {
            foreignKeyName: "spv_entities_issuer_id_fkey"
            columns: ["issuer_id"]
            isOneToOne: false
            referencedRelation: "issuer_profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      spv_shareholders: {
        Row: {
          address_proof_url: string | null
          created_at: string
          full_name: string
          id: string
          metadata: Json | null
          ownership_percentage: number
          passport_url: string | null
          spv_id: string
          verification_status:
            | Database["public"]["Enums"]["verification_status"]
            | null
        }
        Insert: {
          address_proof_url?: string | null
          created_at?: string
          full_name: string
          id?: string
          metadata?: Json | null
          ownership_percentage: number
          passport_url?: string | null
          spv_id: string
          verification_status?:
            | Database["public"]["Enums"]["verification_status"]
            | null
        }
        Update: {
          address_proof_url?: string | null
          created_at?: string
          full_name?: string
          id?: string
          metadata?: Json | null
          ownership_percentage?: number
          passport_url?: string | null
          spv_id?: string
          verification_status?:
            | Database["public"]["Enums"]["verification_status"]
            | null
        }
        Relationships: [
          {
            foreignKeyName: "spv_shareholders_spv_id_fkey"
            columns: ["spv_id"]
            isOneToOne: false
            referencedRelation: "spv_entities"
            referencedColumns: ["id"]
          },
        ]
      }
      submission_notifications: {
        Row: {
          created_at: string
          id: string
          message: string
          notification_type: string
          submission_id: string | null
        }
        Insert: {
          created_at?: string
          id?: string
          message: string
          notification_type: string
          submission_id?: string | null
        }
        Update: {
          created_at?: string
          id?: string
          message?: string
          notification_type?: string
          submission_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "submission_notifications_submission_id_fkey"
            columns: ["submission_id"]
            isOneToOne: false
            referencedRelation: "issuer_submissions"
            referencedColumns: ["id"]
          },
        ]
      }
      subscriptions: {
        Row: {
          amount: number
          confirmed_at: string | null
          created_at: string | null
          investor_id: string | null
          status: string | null
          subscription_id: string
          token_id: string
        }
        Insert: {
          amount: number
          confirmed_at?: string | null
          created_at?: string | null
          investor_id?: string | null
          status?: string | null
          subscription_id?: string
          token_id: string
        }
        Update: {
          amount?: number
          confirmed_at?: string | null
          created_at?: string | null
          investor_id?: string | null
          status?: string | null
          subscription_id?: string
          token_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "subscriptions_investor_id_fkey"
            columns: ["investor_id"]
            isOneToOne: false
            referencedRelation: "investors"
            referencedColumns: ["investor_id"]
          },
        ]
      }
      token_allocations: {
        Row: {
          allocation_id: string
          amount: number
          confirmed_at: string | null
          created_at: string | null
          distributed_at: string | null
          status: string | null
          subscription_id: string | null
          token_id: string
        }
        Insert: {
          allocation_id?: string
          amount: number
          confirmed_at?: string | null
          created_at?: string | null
          distributed_at?: string | null
          status?: string | null
          subscription_id?: string | null
          token_id: string
        }
        Update: {
          allocation_id?: string
          amount?: number
          confirmed_at?: string | null
          created_at?: string | null
          distributed_at?: string | null
          status?: string | null
          subscription_id?: string | null
          token_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "token_allocations_subscription_id_fkey"
            columns: ["subscription_id"]
            isOneToOne: false
            referencedRelation: "subscriptions"
            referencedColumns: ["subscription_id"]
          },
        ]
      }
      user_2fa: {
        Row: {
          backup_codes: string[]
          created_at: string
          id: string
          is_enabled: boolean | null
          secret: string
          user_id: string
        }
        Insert: {
          backup_codes: string[]
          created_at?: string
          id?: string
          is_enabled?: boolean | null
          secret: string
          user_id: string
        }
        Update: {
          backup_codes?: string[]
          created_at?: string
          id?: string
          is_enabled?: boolean | null
          secret?: string
          user_id?: string
        }
        Relationships: []
      }
      user_agreements: {
        Row: {
          agreement_id: string
          id: string
          metadata: Json | null
          signature: string
          signed_at: string
          user_id: string
        }
        Insert: {
          agreement_id: string
          id?: string
          metadata?: Json | null
          signature: string
          signed_at?: string
          user_id: string
        }
        Update: {
          agreement_id?: string
          id?: string
          metadata?: Json | null
          signature?: string
          signed_at?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "user_agreements_agreement_id_fkey"
            columns: ["agreement_id"]
            isOneToOne: false
            referencedRelation: "legal_agreements"
            referencedColumns: ["id"]
          },
        ]
      }
      user_invites: {
        Row: {
          created_at: string | null
          email: string
          expires_at: string
          id: string
          role: string
          token: string
          used_at: string | null
        }
        Insert: {
          created_at?: string | null
          email: string
          expires_at: string
          id?: string
          role: string
          token: string
          used_at?: string | null
        }
        Update: {
          created_at?: string | null
          email?: string
          expires_at?: string
          id?: string
          role?: string
          token?: string
          used_at?: string | null
        }
        Relationships: []
      }
      user_verifications: {
        Row: {
          created_at: string
          email: string
          expires_at: string
          id: string
          user_id: string
          verification_code: string
          verification_type: string
          verified: boolean | null
        }
        Insert: {
          created_at?: string
          email: string
          expires_at: string
          id?: string
          user_id: string
          verification_code: string
          verification_type: string
          verified?: boolean | null
        }
        Update: {
          created_at?: string
          email?: string
          expires_at?: string
          id?: string
          user_id?: string
          verification_code?: string
          verification_type?: string
          verified?: boolean | null
        }
        Relationships: []
      }
      users: {
        Row: {
          created_at: string | null
          email: string
          id: string
          invite_sent_at: string | null
          name: string
          public_key: string | null
          role: string
          status: string
          updated_at: string | null
        }
        Insert: {
          created_at?: string | null
          email: string
          id?: string
          invite_sent_at?: string | null
          name: string
          public_key?: string | null
          role: string
          status?: string
          updated_at?: string | null
        }
        Update: {
          created_at?: string | null
          email?: string
          id?: string
          invite_sent_at?: string | null
          name?: string
          public_key?: string | null
          role?: string
          status?: string
          updated_at?: string | null
        }
        Relationships: []
      }
      wallet_policies: {
        Row: {
          created_at: string
          description: string | null
          id: string
          is_active: boolean | null
          name: string
          rules: Json
        }
        Insert: {
          created_at?: string
          description?: string | null
          id?: string
          is_active?: boolean | null
          name: string
          rules: Json
        }
        Update: {
          created_at?: string
          description?: string | null
          id?: string
          is_active?: boolean | null
          name?: string
          rules?: Json
        }
        Relationships: []
      }
      wallet_signatories: {
        Row: {
          created_at: string
          email: string | null
          id: string
          name: string
          required_confirmations: number | null
          role: string
          signatory_address: string
          wallet_id: string | null
        }
        Insert: {
          created_at?: string
          email?: string | null
          id?: string
          name: string
          required_confirmations?: number | null
          role: string
          signatory_address: string
          wallet_id?: string | null
        }
        Update: {
          created_at?: string
          email?: string | null
          id?: string
          name?: string
          required_confirmations?: number | null
          role?: string
          signatory_address?: string
          wallet_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "wallet_signatories_wallet_id_fkey"
            columns: ["wallet_id"]
            isOneToOne: false
            referencedRelation: "issuer_wallets"
            referencedColumns: ["id"]
          },
        ]
      }
      wallet_transactions: {
        Row: {
          amount: number | null
          compliance_checks: Json | null
          created_at: string
          id: string
          status: string
          token_id: string | null
          transaction_type: string
          wallet_id: string
        }
        Insert: {
          amount?: number | null
          compliance_checks?: Json | null
          created_at?: string
          id?: string
          status: string
          token_id?: string | null
          transaction_type: string
          wallet_id: string
        }
        Update: {
          amount?: number | null
          compliance_checks?: Json | null
          created_at?: string
          id?: string
          status?: string
          token_id?: string | null
          transaction_type?: string
          wallet_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "wallet_transactions_wallet_id_fkey"
            columns: ["wallet_id"]
            isOneToOne: false
            referencedRelation: "investor_wallets"
            referencedColumns: ["id"]
          },
        ]
      }
      whitelisted_wallets: {
        Row: {
          added_by: string
          compliance_rule_id: string
          created_at: string
          id: string
          wallet_address: string
        }
        Insert: {
          added_by: string
          compliance_rule_id: string
          created_at?: string
          id?: string
          wallet_address: string
        }
        Update: {
          added_by?: string
          compliance_rule_id?: string
          created_at?: string
          id?: string
          wallet_address?: string
        }
        Relationships: [
          {
            foreignKeyName: "whitelisted_wallets_compliance_rule_id_fkey"
            columns: ["compliance_rule_id"]
            isOneToOne: false
            referencedRelation: "compliance_rules"
            referencedColumns: ["id"]
          },
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      accreditation_status: "pending" | "verified" | "failed"
      document_type:
        | "incorporation_cert"
        | "memorandum"
        | "regulatory_license"
        | "director_list"
        | "director_passport"
        | "director_address"
        | "shareholder_register"
        | "shareholder_passport"
        | "shareholder_address"
        | "financial_statements"
        | "qualification_summary"
        | "business_description"
        | "org_chart"
        | "key_people_cv"
        | "aml_kyc_description"
      investor_status: "pending" | "active" | "suspended"
      investor_type: "individual" | "institutional"
      kyc_status: "pending" | "verified" | "failed"
      rule_status: "active" | "inactive"
      verification_status: "pending" | "verified" | "rejected"
      wallet_type: "integrated" | "external"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type PublicSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (PublicSchema["Tables"] & PublicSchema["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (PublicSchema["Tables"] &
        PublicSchema["Views"])
    ? (PublicSchema["Tables"] &
        PublicSchema["Views"])[PublicTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof PublicSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof PublicSchema["Enums"]
    ? PublicSchema["Enums"][PublicEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof PublicSchema["CompositeTypes"]
    | { schema: keyof Database },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
  ? Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof PublicSchema["CompositeTypes"]
    ? PublicSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never
