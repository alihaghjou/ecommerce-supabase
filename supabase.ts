export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      product: {
        Row: {
          category: Database["public"]["Enums"]["enumcategory"]
          description: string
          id: number
          image: string
          price: number
          title: string
        }
        Insert: {
          category: Database["public"]["Enums"]["enumcategory"]
          description: string
          id?: number
          image: string
          price: number
          title: string
        }
        Update: {
          category?: Database["public"]["Enums"]["enumcategory"]
          description?: string
          id?: number
          image?: string
          price?: number
          title?: string
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      enumcategory: "digital" | "book" | "clothe" | "shoe"

    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
